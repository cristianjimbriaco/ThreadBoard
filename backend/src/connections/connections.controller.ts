import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { CreateConnectionDto } from './dto/create-connection.dto';

@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @Post()
  create(@Body() dto: CreateConnectionDto) {
    return this.connectionsService.create(dto);
  }

  @Get('board/:boardId')
  findByBoard(@Param('boardId') boardId: string) {
    return this.connectionsService.findByBoard(boardId);
  }
}
