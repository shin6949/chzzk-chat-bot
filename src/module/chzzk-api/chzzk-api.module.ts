import { Module } from '@nestjs/common';
import { ChzzkApiService } from './chzzk-api.service';

@Module({
  providers: [ChzzkApiService],
  exports: [ChzzkApiService],
})
export class ChzzkApiModule {}
