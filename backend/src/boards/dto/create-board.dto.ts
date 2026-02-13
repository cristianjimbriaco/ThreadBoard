import { IsString, IsOptional } from 'class-validator';

export class CreateBoardDto {

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}
