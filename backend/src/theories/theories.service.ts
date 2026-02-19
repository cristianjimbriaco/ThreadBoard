import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTheoryDto, UpdateTheoryDto } from './dto/create-theory.dto';

@Injectable()
export class TheoriesService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateTheoryDto) {
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
        return this.prisma.theory.findUnique({
            where: { nodeId },
            include: {
                node: true
            },
        });
    }

    async findAll() {
        return this.prisma.theory.findMany({
            include: {
                node: true
            }
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
