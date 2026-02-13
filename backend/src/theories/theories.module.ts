import { Module } from '@nestjs/common';
import { TheoriesService } from './theories.service';
import { TheoriesController } from './theories.controller';

@Module({
  providers: [TheoriesService],
  controllers: [TheoriesController]
})
export class TheoriesModule {}
