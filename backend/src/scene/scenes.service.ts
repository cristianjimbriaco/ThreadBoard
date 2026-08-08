import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSceneDto, UpdateSceneDto } from './dto/create-scene.dto';
import { NodeType } from '@prisma/client';
import { CreateBoardSceneDto } from './dto/create-board-scene.dto';

@Injectable()
export class ScenesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSceneDto) {
    const node = await this.prisma.node.findUnique({
      where: { id: dto.nodeId },
      include: {
        scene: true,
      },
    });

    if (!node) {
      throw new NotFoundException(`Node with id ${dto.nodeId} not found`);
    }

    if (node.type !== NodeType.SCENE) {
      throw new BadRequestException(
        `Scene data can only be assigned to a SCENE node`,
      );
    }

    if (node.scene) {
      throw new ConflictException(
        `Node with id ${dto.nodeId} already has scene data`,
      );
    }

    return this.prisma.scene.create({
      data: {
        nodeId: dto.nodeId,
        title: dto.title,
        imageUrl: dto.imageUrl,
        season: dto.season,
        episode: dto.episode,
        minute: dto.minute,
        description: dto.description,
        location: dto.location,
        note: dto.note,
      },
    });
  }

  findAll() {
    return this.prisma.scene.findMany({
      include: {
        node: true,
      },
    });
  }

  async findByNode(nodeId: string) {
    const scene = await this.prisma.scene.findUnique({
      where: { nodeId },
      include: {
        node: true,
      },
    });
    if (!scene) {
      throw new NotFoundException(`Scene for node with Id ${nodeId} not found`);
    }
    return scene;
  }

  async update(nodeId: string, updateSceneDto: UpdateSceneDto) {
    const scene = await this.prisma.scene.findUnique({
      where: { nodeId },
    });

    if (!scene) {
      throw new NotFoundException(`Scene with Id ${nodeId} not found`);
    }

    return this.prisma.scene.update({
      where: { nodeId },
      data: updateSceneDto,
    });
  }

  async createForBoard(boardId: string, dto: CreateBoardSceneDto) {
    return this.prisma.$transaction(async (tx) => {
      const board = await tx.board.findUnique({
        where: { id: boardId },
        select: { id: true },
      });
      if (!board) {
        throw new NotFoundException(`Board with id ${boardId} not found`);
      }

      const node = await tx.node.create({
        data: {
          boardId,
          type: NodeType.SCENE,
          positionX: dto.positionX,
          positionY: dto.positionY,
        },
      });

      return tx.scene.create({
        data: {
          nodeId: node.id,
          title: dto.title,
          imageUrl: dto.imageUrl,
          season: dto.season,
          episode: dto.episode,
          minute: dto.minute,
          description: dto.description,
          location: dto.location,
          note: dto.note,
        },
        include: {
          node: true,
        },
      });
    });
  }
}
