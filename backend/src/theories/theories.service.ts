import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTheoryDto } from './dto/create-theory.dto';

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
        return this.prisma.scene.findUnique({
            where: { nodeId },
            include: {
                node: true
            },
        });
    }

}
