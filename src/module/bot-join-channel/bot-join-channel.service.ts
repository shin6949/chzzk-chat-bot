import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BotJoinChannelEntity } from './bot-join-channel.entity';

@Injectable()
export class BotJoinChannelService {
  constructor(
    @InjectRepository(BotJoinChannelEntity)
    private readonly botJoinChannelRepository: Repository<BotJoinChannelEntity>,
  ) {}
}
