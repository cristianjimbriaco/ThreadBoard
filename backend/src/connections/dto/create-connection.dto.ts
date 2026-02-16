import { IsUUID, IsEnum } from 'class-validator';

export enum ConnectionType {
  CAUSES = 'CAUSES',
  LEADS_TO = 'LEADS_TO',
  PARALLEL = 'PARALLEL',
  CONTRADICTS = 'CONTRADICTS'
}

export class CreateConnectionDto {
  @IsUUID()
  boardId: string;

  @IsUUID()
  sourceNodeId: string;

  @IsUUID()
  targetNodeId: string;

  @IsEnum(ConnectionType)
  type: ConnectionType;
}
