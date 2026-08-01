import { IsEnum, IsNumber, IsUUID } from 'class-validator';
import { NodeType } from '@prisma/client';

export class CreateNodeDto {
  @IsUUID()
  boardId: string;

  @IsEnum(NodeType)
  type: NodeType;

  @IsNumber()
  positionX: number;

  @IsNumber()
  positionY: number;
}

export class UpdateNodePositionDto {
  @IsNumber()
  positionX: number;

  @IsNumber()
  positionY: number;
}
