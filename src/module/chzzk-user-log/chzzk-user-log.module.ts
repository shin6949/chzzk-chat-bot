import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChzzkUserLogEntity } from './chzzk-user-log.entity';
import { ChzzkUserLogService } from './chzzk-user-log.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChzzkUserLogEntity])],
  providers: [ChzzkUserLogService],
  exports: [ChzzkUserLogService],
})
export class ChzzkUserLogModule {}
