import { Test, TestingModule } from '@nestjs/testing';
import { ScenesService } from './scenes.service';
import { PrismaService } from '../prisma/prisma.service';
import { prismaServiceMock } from '../../test/mocks/prisma-service.mock';

describe('ScenesService', () => {
  let service: ScenesService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScenesService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<ScenesService>(ScenesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
