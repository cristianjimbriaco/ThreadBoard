import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}

    // Get all boards
    @Get()
    findAll() {
        return this.boardsService.findAll();
    }

    // Get a single board by ID
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.boardsService.findOne(id);
    }

    // Create a new board
    @Post()
    create(@Body() dto: CreateBoardDto) {
        return this.boardsService.create(dto);
    }

    // Get the graph (nodes and edges) for a specific board
    // Se usa para devolver el modelo de dominio completo de un board, incluyendo sus nodos y conexiones
    @Get(':boardId/graph')
    getGraph(@Param('boardId') boardId: string) {
        return this.boardsService.getGraph(boardId);
    }

    // Get the graph in a format suitable for React Flow (graph view)
    // Se usa para devolver el modelo de dominio del board en un formato específico para la vista de grafo (React Flow)
    @Get(':boardId/graph-view')
    getGraphView(@Param('boardId') boardId: string) {
        return this.boardsService.getGraphView(boardId);
    }

    // Delete a board by ID
    @Delete(':id')
        async remove(@Param('id') id: string) {
        return this.boardsService.remove(id);
    }

}
