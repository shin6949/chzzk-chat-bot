import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { BotFeatureEnum } from './bot-feature.enum';

@Entity('bot_join_channel')
export class BotJoinChannelEntity {
  @PrimaryColumn({
    name: 'target_uuid',
    length: 255,
  })
  targetUuid: string;

  @PrimaryColumn({
    name: 'feature',
    type: 'enum',
    enum: BotFeatureEnum,
    length: 255,
  })
  feature: string;

  @Column({ name: 'is_now_live' })
  isNowLive: boolean;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
