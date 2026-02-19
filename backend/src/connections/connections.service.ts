import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConnectionsService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateConnectionDto) {
        const { boardId, sourceNodeId, targetNodeId, type } = dto;

        if (sourceNodeId === targetNodeId) {
            throw new BadRequestException('Cannot connect a node to itself');
        }

        const sourceNode = await this.prisma.node.findUnique({
            where: { id: sourceNodeId },
        });

        const targetNode = await this.prisma.node.findUnique({
            where: { id: targetNodeId },
        });

        if (!sourceNode || !targetNode) {
            throw new NotFoundException('One or both nodes not found');
        }

        if (sourceNode.boardId !== boardId || targetNode.boardId !== boardId) {
            throw new BadRequestException('Nodes must belong to the same board');
        }

        return this.prisma.connection.create({
            data: dto,
        });
    }

    async findAll() {
        return this.prisma.connection.findMany();
    }

    async findByBoard(boardId: string) {
        return this.prisma.connection.findMany({
            where: { boardId },
        });
    }

    async remove(id: string) {
        const connection = await this.prisma.connection.findUnique({
            where: { id },
        });

        if (!connection) {
            throw new NotFoundException(`Connection with id ${id} not found`);
        }

        await this.prisma.connection.delete({
            where: { id },
        });

        return { message: 'Connection deleted successfully' };
    }

}
