import { IsString, IsOptional, IsNumber, IsUUID } from "class-validator";

export class CreateSceneDto {
    @IsUUID()
    nodeId: string;

    @IsString()
    title:string

    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsOptional()
    @IsNumber()
    season?: number;

    @IsOptional()
    @IsNumber()
    episode?: number;

    @IsOptional()
    @IsNumber()
    minute?: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    location?: string;

    @IsOptional()
    @IsString()
    note?: string;
}
