import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { CreateSceneDto, UpdateSceneDto } from './dto/create-scene.dto';

@Controller('scenes')
export class ScenesController {
  constructor(private readonly scenesService: ScenesService) {}

  @Post()
  create(@Body() dto: CreateSceneDto) {
    return this.scenesService.create(dto);
  }

  @Get()
  findAll() {
    return this.scenesService.findAll();
  }

  @Get(':nodeId')
  findByNode(@Param('nodeId') nodeId: string) {
    return this.scenesService.findByNode(nodeId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSceneDto: UpdateSceneDto,
  ) {
    return this.scenesService.update(id, updateSceneDto);
  }

}
