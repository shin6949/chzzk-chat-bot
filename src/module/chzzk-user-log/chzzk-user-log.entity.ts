import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ChzzkUserEntity } from '../chzzk-user/chzzk-user.entity';

@Entity('chzzk_user_log')
export class ChzzkUserLogEntity {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  targetUuid: string;

  @PrimaryColumn({ type: 'varchar', length: 255 })
  fountAtUuid: string;

  @PrimaryColumn({ type: 'varchar', length: 255 })
  newNickname: string;

  @PrimaryColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => ChzzkUserEntity, (user) => user.uuid, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'targetUuid' })
  targetUser: ChzzkUserEntity;

  @ManyToOne(() => ChzzkUserEntity, (user) => user.uuid, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fountAtUuid' })
  fountAtUser: ChzzkUserEntity;
}
