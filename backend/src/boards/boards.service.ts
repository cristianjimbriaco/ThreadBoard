import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    constructor(private readonly prisma: PrismaService) {}

    // Get all boards
    findAll() {
        return this.prisma.board.findMany();
    }

    // Get a single board by ID
    findOne(id: string) {
        return this.prisma.board.findUnique({
            where: { id },
        });
    }

    // Create a new board
    create(dto: CreateBoardDto) {
        return this.prisma.board.create({
            data: dto,
        });
    }
    
    async remove(id: string) {
        const board = await this.prisma.board.findUnique({
            where: { id },
        });

        if (!board) {
            throw new NotFoundException(`Board with id ${id} not found`);
        }

        await this.prisma.board.delete({
            where: { id },
        });

        return { message: 'Board deleted successfully' };
    }


    // Get the graph (nodes and edges) for a specific board (modelo de dominio)
    async getGraph(boardId: string) {
        const board = await this.prisma.board.findUnique({
            where: { id: boardId },
        });

        // Si el board no existe, lanzamos una excepción 404
        if (!board) {
            throw new NotFoundException('Board not found');
        }

        // Obtenemos los nodos (nodes) y conexiones (edges) asociados al board
        const nodes = await this.prisma.node.findMany({
            where: { boardId },
            include: {
            scene: true,
            theory: true,
            },
        });

        const edges = await this.prisma.connection.findMany({
            where: { boardId },
        });

        // Devolvemos el modelo de dominio completo del board, incluyendo sus nodos y conexiones
        return {
            nodes,
            edges,
        };
    }

    // Get the graph in a format suitable for React Flow (graph view)
    async getGraphView(boardId: string) {
        const graph = await this.getGraph(boardId);

        const nodes = graph.nodes.map(node => ({
            id: node.id,
            type: node.type.toLowerCase(),
            position: {
                x: node.positionX,
                y: node.positionY,
            },
            data: {
                scene: node.scene,
                theory: node.theory,
            },
        }));

        const edges = graph.edges.map(edge => ({
            id: edge.id,
            source: edge.sourceNodeId,
            target: edge.targetNodeId,
            label: edge.type.toLowerCase(),
        }));

        return {
            nodes,
            edges,
        };
    }

}
