import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChzzkStreamingLogEntity } from './chzzk-streaming-log.entity';

@Injectable()
export class ChzzkStreamingLogService {
  constructor(
    @InjectRepository(ChzzkStreamingLogEntity)
    private readonly chzzkStreamingLogRepository: Repository<ChzzkStreamingLogEntity>,
  ) {}
}
