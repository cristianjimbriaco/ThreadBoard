import { Module } from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { ScenesController } from './scenes.controller';
import { BoardScenesController } from './board-scene.controller';

@Module({
  providers: [ScenesService],
  controllers: [ScenesController, BoardScenesController],
})
export class ScenesModule {}
