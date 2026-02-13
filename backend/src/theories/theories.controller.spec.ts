import { Test, TestingModule } from '@nestjs/testing';
import { TheoriesController } from './theories.controller';

describe('TheoriesController', () => {
  let controller: TheoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheoriesController],
    }).compile();

    controller = module.get<TheoriesController>(TheoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
