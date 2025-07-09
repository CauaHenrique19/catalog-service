import { IsOptional, IsString } from 'class-validator';

export class FindCategoriesDTO {
  @IsOptional()
  @IsString()
  name?: string;
}
