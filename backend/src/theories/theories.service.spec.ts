import { Test, TestingModule } from '@nestjs/testing';
import { TheoriesService } from './theories.service';
import { PrismaService } from '../prisma/prisma.service';
import { prismaServiceMock } from '../../test/mocks/prisma-service.mock';

describe('TheoriesService', () => {
  let service: TheoriesService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TheoriesService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<TheoriesService>(TheoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
