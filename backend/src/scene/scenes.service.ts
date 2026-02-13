import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSceneDto } from './dto/create-scene.dto';

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

    async findByNode(nodeId: string) {
        return this.prisma.scene.findUnique({
            where: { nodeId },
            include: {
                node: true
            },
        });
    }
}
