import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSceneDto, UpdateSceneDto } from './dto/create-scene.dto';
import { NodeType } from 'src/nodes/dto/create-node.dto';

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
}
