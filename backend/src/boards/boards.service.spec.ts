import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from './boards.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { prismaServiceMock } from '../../test/mocks/prisma-service.mock';

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardsService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all boards', async () => {
    const boards = [
      {
        id: '11111111-1111-4111-8111-111111111111',
        title: 'Test board',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    prismaServiceMock.board.findMany.mockResolvedValue(boards);

    await expect(service.findAll()).resolves.toEqual(boards);

    expect(prismaServiceMock.board.findMany).toHaveBeenCalledTimes(1);
  });

  it('should throw NotFoundException when board does not exist', async () => {
    const boardId = '11111111-1111-4111-8111-111111111111';

    prismaServiceMock.board.findUnique.mockResolvedValue(null);

    await expect(service.findOne(boardId)).rejects.toBeInstanceOf(
      NotFoundException,
    );

    expect(prismaServiceMock.board.findUnique).toHaveBeenCalledWith({
      where: { id: boardId },
    });
  });

  it('should delete an existing board', async () => {
    const boardId = '11111111-1111-4111-8111-111111111111';

    prismaServiceMock.board.findUnique.mockResolvedValue({
      id: boardId,
    });

    prismaServiceMock.board.delete.mockResolvedValue({
      id: boardId,
    });

    await expect(service.remove(boardId)).resolves.toEqual({
      message: 'Board deleted successfully',
    });

    expect(prismaServiceMock.board.delete).toHaveBeenCalledWith({
      where: { id: boardId },
    });
  });
});
