import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import 'dotenv/config';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('ThreadBoard API (e2e)', () => {
  let app: INestApplication;
  let boardId: string | undefined;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    if (!app) {
      return;
    }

    if (boardId) {
      await request(app.getHttpServer()).delete(`/boards/${boardId}`);
    }

    await app.close();
  });

  it('responds from the root endpoint', async () => {
    await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('rejects a board with an empty title', async () => {
    const response = await request(app.getHttpServer())
      .post('/boards')
      .send({
        title: '   ',
      })
      .expect(400);

    expect(response.body).toEqual(
      expect.objectContaining({
        statusCode: 400,
        error: 'Bad Request',
      }),
    );

    expect(response.body.message).toEqual(
      expect.arrayContaining([
        expect.stringMatching(
          /title must contain at least one non-whitespace character/i,
        ),
      ]),
    );
  });

  it('completes the board lifecycle', async () => {
    const title = `E2E board ${Date.now()}`;

    const creationResponse = await request(app.getHttpServer())
      .post('/boards')
      .send({
        title,
        description: 'Temporary board created by the e2e test',
      })
      .expect(201);

    expect(creationResponse.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title,
        description: 'Temporary board created by the e2e test',
      }),
    );

    boardId = creationResponse.body.id as string;

    const findResponse = await request(app.getHttpServer())
      .get(`/boards/${boardId}`)
      .expect(200);

    expect(findResponse.body).toEqual(
      expect.objectContaining({
        id: boardId,
        title,
      }),
    );

    await request(app.getHttpServer())
      .delete(`/boards/${boardId}`)
      .expect(200)
      .expect({
        message: 'Board deleted successfully',
      });

    await request(app.getHttpServer()).get(`/boards/${boardId}`).expect(404);

    boardId = undefined;
  });
});
