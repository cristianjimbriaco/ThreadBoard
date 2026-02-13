import { Test, TestingModule } from '@nestjs/testing';
import { TheoriesService } from './theories.service';

describe('TheoriesService', () => {
  let service: TheoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheoriesService],
    }).compile();

    service = module.get<TheoriesService>(TheoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
