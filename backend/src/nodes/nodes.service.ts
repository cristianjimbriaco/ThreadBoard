import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNodeDto, UpdateNodePositionDto } from './dto/create-node.dto';

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

    async updatePosition(id: string, dto: UpdateNodePositionDto) {
        return this.prisma.node.update({
            where: { id },
            data: {
            positionX: dto.positionX,
            positionY: dto.positionY,
            },
        });
    }

    async remove(id: string) {
        const node = await this.prisma.node.findUnique({
            where: { id },
        });

        if (!node) {
            throw new NotFoundException(`Node with id ${id} not found`);
        }

        await this.prisma.node.delete({
            where: { id },
        });

        return { message: 'Node deleted successfully' };
    }


}
