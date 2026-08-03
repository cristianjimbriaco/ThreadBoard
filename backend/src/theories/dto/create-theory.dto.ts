import { IsString, IsOptional, IsUUID, Matches } from 'class-validator';

export class CreateTheoryDto {
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
  @IsString()
  description?: string;
}

export class UpdateTheoryDto {
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
  @IsString()
  description?: string;
}
