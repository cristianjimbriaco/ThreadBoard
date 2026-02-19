import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSceneDto, UpdateSceneDto } from './dto/create-scene.dto';

@Injectable()
export class ScenesService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateSceneDto) {
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

    async findAll() {
        return this.prisma.scene.findMany({
            include: {
                node: true
            }
        });
    }

    async findByNode(nodeId: string) {
        return this.prisma.scene.findUnique({
            where: { nodeId },
            include: {
                node: true
            },
        });
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
