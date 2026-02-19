import { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';
import { TheoriesService } from './theories.service';
import { CreateTheoryDto, UpdateTheoryDto } from './dto/create-theory.dto';


@Controller('theories')
export class TheoriesController {
    constructor(private theoriesService: TheoriesService) {}

    @Post()
    create(@Body() dto: CreateTheoryDto) {
        return this.theoriesService.create(dto);
    }

    @Get()
    findAll() {
        return this.theoriesService.findAll();
    }

    @Get(':nodeId')
    findByNode(@Param('nodeId') nodeId: string) {
        return this.theoriesService.findByNode(nodeId);
    }

    @Patch(':id')
    async update(@Param('id') id: string,@Body() updateTheoryDto: UpdateTheoryDto) {
        return this.theoriesService.update(id, updateTheoryDto);
    }

}
