import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { CreateNodeDto, UpdateNodePositionDto } from './dto/create-node.dto';

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

    @Patch(':id/position')
    updatePosition(@Param('id') id: string,@Body() dto: UpdateNodePositionDto) {
        return this.nodesService.updatePosition(id, dto);
    }

    @Delete(':id')
        async remove(@Param('id') id: string) {
        return this.nodesService.remove(id);
    }

}
