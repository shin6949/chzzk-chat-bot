import { Expose } from 'class-transformer';
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class ChzzkBaseResponse {
  @IsNumber()
  @Expose({ name: 'code' })
  code: number;

  @IsString()
  @IsOptional()
  @Expose({ name: 'message' })
  message: string | null;
}
