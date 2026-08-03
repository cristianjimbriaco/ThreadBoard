import { IsString, IsOptional, Matches } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @Matches(/\S/, {
    message: 'Title must contain at least one non-whitespace character',
  })
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
