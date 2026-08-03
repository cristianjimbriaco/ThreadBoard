import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTheoryDto, UpdateTheoryDto } from './dto/create-theory.dto';

@Injectable()
export class TheoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTheoryDto) {
    const node = await this.prisma.node.findUnique({
      where: { id: dto.nodeId },
      include: {
        theory: true,
      },
    });

    if (!node) {
      throw new NotFoundException(`Node with id ${dto.nodeId} not found`);
    }

    if (node.type !== 'THEORY') {
      throw new BadRequestException(
        `Theory data can only be assigned to a THEORY node`,
      );
    }

    if (node.theory) {
      throw new ConflictException(
        `Node with id ${dto.nodeId} already has theory data`,
      );
    }

    return this.prisma.theory.create({
      data: {
        nodeId: dto.nodeId,
        title: dto.title,
        imageUrl: dto.imageUrl,
        description: dto.description,
      },
    });
  }

  async findByNode(nodeId: string) {
    const theory = await this.prisma.theory.findUnique({
      where: { nodeId },
      include: {
        node: true,
      },
    });
    if (!theory) {
      throw new NotFoundException(
        `Theory for node with Id ${nodeId} not found`,
      );
    }
    return theory;
  }

  findAll() {
    return this.prisma.theory.findMany({
      include: {
        node: true,
      },
    });
  }

  async update(nodeId: string, updateTheoryDto: UpdateTheoryDto) {
    const theory = await this.prisma.theory.findUnique({
      where: { nodeId },
    });

    if (!theory) {
      throw new NotFoundException(`Theory with id ${nodeId} not found`);
    }

    return this.prisma.theory.update({
      where: { nodeId },
      data: updateTheoryDto,
    });
  }
}
