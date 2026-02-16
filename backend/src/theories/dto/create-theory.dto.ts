import { IsString, IsOptional, IsUUID } from "class-validator";

export class CreateTheoryDto {
    @IsUUID()
    nodeId: string;

    @IsString()
    title:string

    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsOptional()
    @IsString()
    description?: string;
}
