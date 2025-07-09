import { IsString } from 'class-validator';

export class CreateCategoryDTO {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsString()
  icon: string;
}
