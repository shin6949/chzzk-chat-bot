import { Expose, Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsOptional,
  IsBoolean,
  IsArray,
  ValidateNested,
} from 'class-validator';

export class ChzzkApiLiveStatusBaseResponse {
  @IsNumber()
  @Expose({ name: 'code' })
  code: number;

  @IsString()
  @IsOptional()
  @Expose({ name: 'message' })
  message: string | null;
}

class ChzzkApiLiveStatusContent {
  @IsString()
  @Expose({ name: 'liveTitle' })
  liveTitle: string;

  @IsString()
  @Expose({ name: 'status' })
  status: string;

  @IsNumber()
  @Expose({ name: 'concurrentUserCount' })
  concurrentUserCount: number;

  @IsNumber()
  @Expose({ name: 'accumulateCount' })
  accumulateCount: number;

  @IsBoolean()
  @Expose({ name: 'paidPromotion' })
  paidPromotion: boolean;

  @IsBoolean()
  @Expose({ name: 'adult' })
  adult: boolean;

  @IsBoolean()
  @Expose({ name: 'clipActive' })
  clipActive: boolean;

  @IsString()
  @Expose({ name: 'chatChannelId' })
  chatChannelId: string;

  @IsArray()
  @IsString({ each: true })
  @Expose({ name: 'tags' })
  tags: string[];

  @IsString()
  @Expose({ name: 'categoryType' })
  categoryType: string;

  @IsString()
  @Expose({ name: 'liveCategory' })
  liveCategory: string;

  @IsString()
  @Expose({ name: 'liveCategoryValue' })
  liveCategoryValue: string;

  @IsString()
  @Expose({ name: 'livePollingStatusJson' })
  livePollingStatusJson: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'faultStatus' })
  faultStatus: string | null;

  @IsString()
  @Expose({ name: 'userAdultStatus' })
  userAdultStatus: string;

  @IsBoolean()
  @Expose({ name: 'chatActive' })
  chatActive: boolean;

  @IsString()
  @Expose({ name: 'chatAvailableGroup' })
  chatAvailableGroup: string;

  @IsString()
  @Expose({ name: 'chatAvailableCondition' })
  chatAvailableCondition: string;

  @IsNumber()
  @Expose({ name: 'minFollowerMinute' })
  minFollowerMinute: number;

  @IsBoolean()
  @Expose({ name: 'chatDonationRankingExposure' })
  chatDonationRankingExposure: boolean;
}

export class ChzzkApiLiveStatusResponse extends ChzzkApiLiveStatusBaseResponse {
  @ValidateNested()
  @Type(() => ChzzkApiLiveStatusContent)
  @Expose({ name: 'content' })
  content: ChzzkApiLiveStatusContent;
}
