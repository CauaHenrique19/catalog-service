import { IsString } from 'class-validator';

export class CreateMediaDTO {
  @IsString()
  name: string;

  @IsString()
  synopsis: string;

  @IsString()
  categoryId: string;
}
