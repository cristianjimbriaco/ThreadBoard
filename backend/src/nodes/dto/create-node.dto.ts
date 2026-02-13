import { IsEnum, IsNumber, IsUUID } from 'class-validator';

export enum NodeType {
  SCENE = 'SCENE',
  THEORY = 'THEORY',
}

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
