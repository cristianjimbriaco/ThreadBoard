import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { CreateSceneDto } from './dto/create-scene.dto';

@Controller('scenes')
export class ScenesController {
  constructor(private readonly scenesService: ScenesService) {}

  @Post()
  create(@Body() dto: CreateSceneDto) {
    return this.scenesService.create(dto);
  }

  @Get(':nodeId')
  findByNode(@Param('nodeId') nodeId: string) {
    return this.scenesService.findByNode(nodeId);
  }
}
