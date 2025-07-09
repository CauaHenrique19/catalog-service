import { IsOptional, IsString } from 'class-validator';

export class UpdateMediaDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  synopsis?: string;

  @IsString()
  @IsOptional()
  categoryId?: string;
}
