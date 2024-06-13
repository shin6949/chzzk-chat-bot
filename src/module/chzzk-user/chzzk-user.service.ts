import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChzzkUserEntity } from './chzzk-user.entity';

@Injectable()
export class ChzzkUserService {
  constructor(
    @InjectRepository(ChzzkUserEntity)
    private readonly chzzkUserRepository: Repository<ChzzkUserEntity>,
  ) {}
}
