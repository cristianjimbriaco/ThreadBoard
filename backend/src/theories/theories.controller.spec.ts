import { Test, TestingModule } from '@nestjs/testing';
import { TheoriesController } from './theories.controller';
import { TheoriesService } from './theories.service';

describe('TheoriesController', () => {
  let controller: TheoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheoriesController],
      providers: [
        {
          provide: TheoriesService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TheoriesController>(TheoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
