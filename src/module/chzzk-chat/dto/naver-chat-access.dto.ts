import { Expose, Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { ChzzkBaseResponse } from '../../chzzk-api/dto/chzzk-api-base-response.dto';

export class NaverChatAccessDto extends ChzzkBaseResponse {
  @ValidateNested()
  @Type(() => NaverChatAccessContent)
  @Expose({ name: 'content' })
  content: NaverChatAccessContent;
}

class NaverChatAccessContent {
  @IsString()
  @Expose({ name: 'accessToken' })
  accessToken: string;

  @ValidateNested()
  @Type(() => TemporaryRestrict)
  @Expose({ name: 'temporaryRestrict' })
  temporaryRestrict: TemporaryRestrict;

  @IsBoolean()
  @Expose({ name: 'realNameAuth' })
  realNameAuth: boolean;

  @IsString()
  @Expose({ name: 'extraToken' })
  extraToken: string;
}

class TemporaryRestrict {
  @IsBoolean()
  @Expose({ name: 'temporaryRestrict' })
  temporaryRestrict: boolean;

  @IsNumber()
  @Expose({ name: 'times' })
  times: number;

  @IsOptional()
  @Expose({ name: 'duration' })
  duration: number | null;

  @IsOptional()
  @Expose({ name: 'createdTime' })
  createdTime: Date | null;
}
