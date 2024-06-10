import { Column, ManyToOne, JoinColumn, Entity, PrimaryColumn } from 'typeorm';
import { ChzzkEventType } from './chzzk-event-type.enum';
import { ChzzkUserEntity } from '../chzzk-user';

@Entity('chzzk_streaming_log')
export class ChzzkStreamingLog {
  @PrimaryColumn({
    name: 'streamer_uuid',
    length: 255,
  })
  streamerUuid: string;

  @Column({
    name: 'event_type',
    type: 'enum',
    enum: ChzzkEventType,
    nullable: false,
  })
  eventType: string;

  @PrimaryColumn({
    name: 'started_at',
  })
  startedAt: Date;

  @ManyToOne(() => ChzzkUserEntity, (user) => user.uuid, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'streamerUuid' })
  streamerEntity: ChzzkUserEntity;
}
