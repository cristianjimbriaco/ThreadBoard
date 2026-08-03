import { IsUUID, IsEnum } from 'class-validator';
import { ConnectionType } from '@prisma/client';

export class CreateConnectionDto {
  @IsUUID()
  boardId!: string;

  @IsUUID()
  sourceNodeId!: string;

  @IsUUID()
  targetNodeId!: string;

  @IsEnum(ConnectionType)
  type!: ConnectionType;
}
