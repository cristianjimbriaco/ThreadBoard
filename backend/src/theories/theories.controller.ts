import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { TheoriesService } from './theories.service';
import { CreateTheoryDto } from './dto/create-theory.dto';


@Controller('theories')
export class TheoriesController {
    constructor(private theoriesService: TheoriesService) {}

    @Post()
    create(@Body() dto: CreateTheoryDto) {
        return this.theoriesService.create(dto);
    }

    @Get(':nodeId')
    findByNode(@Param('nodeId') nodeId: string) {
        return this.theoriesService.findByNode(nodeId);
    }
}
