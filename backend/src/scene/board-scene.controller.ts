import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreateBoardSceneDto } from './dto/create-board-scene.dto';
import { ScenesService } from './scenes.service';

@Controller('boards/:boardId/scenes')
export class BoardScenesController {
  constructor(private readonly scenesService: ScenesService) {}

  @Post()
  createForBoard(
    @Param('boardId', new ParseUUIDPipe()) boardId: string,
    @Body() dto: CreateBoardSceneDto,
  ) {
    return this.scenesService.createForBoard(boardId, dto);
  }
}
