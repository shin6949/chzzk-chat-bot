import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChzzkUserEntity } from './chzzk-user.entity';
import { ChzzkUserService } from './chzzk-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChzzkUserEntity])],
  providers: [ChzzkUserService],
  exports: [ChzzkUserService],
})
export class ChzzkUserModule {}
