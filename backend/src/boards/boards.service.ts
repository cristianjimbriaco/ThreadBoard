import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    constructor(private readonly prisma: PrismaService) {}

    findAll() {
        return this.prisma.board.findMany();
    }

    create(dto: CreateBoardDto) {
        return this.prisma.board.create({
            data: dto,
        });
    }

}
