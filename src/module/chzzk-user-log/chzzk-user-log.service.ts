import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChzzkUserLogEntity } from './chzzk-user-log.entity';

@Injectable()
export class ChzzkUserLogService {
  constructor(
    @InjectRepository(ChzzkUserLogEntity)
    private readonly chzzkUserLogRepository: Repository<ChzzkUserLogEntity>,
  ) {}
}
