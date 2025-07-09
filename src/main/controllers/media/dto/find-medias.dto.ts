import { IsOptional, IsString } from 'class-validator';

export class FindMediasDTO {
  @IsOptional()
  @IsString()
  name?: string;
}
