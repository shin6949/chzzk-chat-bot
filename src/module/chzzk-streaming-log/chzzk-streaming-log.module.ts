import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChzzkStreamingLogEntity } from './chzzk-streaming-log.entity';
import { ChzzkStreamingLogService } from './chzzk-streaming-log.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChzzkStreamingLogEntity])],
  providers: [ChzzkStreamingLogService],
  exports: [ChzzkStreamingLogService],
})
export class ChzzkStreamingLogModule {}
