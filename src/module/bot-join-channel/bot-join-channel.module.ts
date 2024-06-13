import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotJoinChannelEntity } from './bot-join-channel.entity';
import { BotJoinChannelService } from './bot-join-channel.service';

@Module({
  imports: [TypeOrmModule.forFeature([BotJoinChannelEntity])],
  providers: [BotJoinChannelService],
  exports: [BotJoinChannelService],
})
export class BotJoinChannelModule {}
