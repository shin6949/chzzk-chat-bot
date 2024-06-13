import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotCommandEntity } from './bot-command.entity';
import { BotCommandService } from './bot-command.service';

@Module({
  imports: [TypeOrmModule.forFeature([BotCommandEntity])],
  providers: [BotCommandService],
  exports: [BotCommandService],
})
export class BotCommandModule {}
