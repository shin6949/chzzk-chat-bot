import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BotCommandEntity } from './bot-command.entity';

@Injectable()
export class BotCommandService {
  constructor(
    @InjectRepository(BotCommandEntity)
    private readonly botCommandRepository: Repository<BotCommandEntity>,
  ) {}
}
