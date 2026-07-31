import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
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
  findByNode(@Param('nodeId', new ParseUUIDPipe()) nodeId: string) {
    return this.scenesService.findByNode(nodeId);
  }

  @Patch(':nodeId')
  update(
    @Param('nodeId', new ParseUUIDPipe()) nodeId: string,
    @Body() updateSceneDto: UpdateSceneDto,
  ) {
    return this.scenesService.update(nodeId, updateSceneDto);
  }
}
