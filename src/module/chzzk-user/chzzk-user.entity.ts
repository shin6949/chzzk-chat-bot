import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('chzzk_user')
export class ChzzkUserEntity {
  @PrimaryColumn({
    name: 'uuid',
    length: 255,
  })
  uuid: string;

  @Column({
    name: 'nickname',
    nullable: false,
    length: 255,
  })
  nickname: string;

  @Column({
    name: 'profile_url',
    nullable: true,
    length: 1000,
  })
  profileUrl: string;

  @CreateDateColumn({
    name: 'created_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @CreateDateColumn({
    name: 'updated_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
