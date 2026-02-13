import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNodeDto } from './dto/create-node.dto';

@Injectable()
export class NodesService {
    constructor(private prisma: PrismaService) {}

    create(dto: CreateNodeDto) {
        return this.prisma.node.create({
            data: dto,
        });
    }

    findByBoard(boardId: string) {
        return this.prisma.node.findMany({
            where: { boardId },
            include: {
                scene: true,
                theory: true,
            }
        });
    }

}
