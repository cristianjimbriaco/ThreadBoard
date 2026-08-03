import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConnectionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateConnectionDto) {
    const { boardId, sourceNodeId, targetNodeId, type } = dto;

    if (sourceNodeId === targetNodeId) {
      throw new BadRequestException('Cannot connect a node to itself');
    }

    const board = await this.prisma.board.findUnique({
      where: { id: boardId },
      select: { id: true },
    });

    if (!board) {
      throw new NotFoundException(`Board with id ${boardId} not found`);
    }

    const [sourceNode, targetNode] = await Promise.all([
      this.prisma.node.findUnique({
        where: { id: sourceNodeId },
      }),
      this.prisma.node.findUnique({
        where: { id: targetNodeId },
      }),
    ]);

    if (!sourceNode) {
      throw new NotFoundException(
        `Source node with id ${sourceNodeId} not found`,
      );
    }

    if (!targetNode) {
      throw new NotFoundException(
        `Target node with id ${targetNodeId} not found`,
      );
    }

    if (sourceNode.boardId !== boardId || targetNode.boardId !== boardId) {
      throw new BadRequestException(
        'Both nodes must belong to the specified board',
      );
    }

    const existingConnection = await this.prisma.connection.findFirst({
      where: {
        boardId,
        sourceNodeId,
        targetNodeId,
        type,
      },
      select: { id: true },
    });

    if (existingConnection) {
      throw new ConflictException('An identical connection alredy exists');
    }

    return this.prisma.connection.create({
      data: {
        boardId,
        sourceNodeId,
        targetNodeId,
        type,
      },
    });
  }

  async findAll() {
    return this.prisma.connection.findMany();
  }

  async findByBoard(boardId: string) {
    const board = await this.prisma.board.findUnique({
      where: { id: boardId },
      select: { id: true },
    });

    if (!board) {
      throw new NotFoundException(`
                Board with id ${boardId} not found`);
    }

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
