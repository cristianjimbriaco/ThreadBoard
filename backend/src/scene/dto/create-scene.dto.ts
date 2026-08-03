import {
  IsString,
  IsOptional,
  IsUUID,
  IsInt,
  Matches,
  Min,
} from 'class-validator';

export class CreateSceneDto {
  @IsUUID()
  nodeId!: string;

  @IsString()
  @Matches(/\S/, {
    message: 'Title must contain at least one non-whitespace character',
  })
  title!: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  season?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  episode?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
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

export class UpdateSceneDto {
  @IsOptional()
  @IsString()
  @Matches(/\S/, {
    message: 'Title must contain at least one non-whitespace character',
  })
  title?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  season?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  episode?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
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
