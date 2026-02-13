import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { CreateNodeDto } from './dto/create-node.dto';

@Controller('nodes')
export class NodesController {
    constructor(private readonly nodesService: NodesService) {}

    @Post()
    create(@Body() createNodeDto: CreateNodeDto) {
        return this.nodesService.create(createNodeDto);
    }

    @Get('board/:boardId')
    findByBoard(@Param('boardId') boardId: string) {
        return this.nodesService.findByBoard(boardId);
    }
}
