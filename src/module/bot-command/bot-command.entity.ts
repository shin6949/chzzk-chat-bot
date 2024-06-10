import { Entity, PrimaryColumn } from 'typeorm';

@Entity('bot_command')
export class BotCommandEntity {
  @PrimaryColumn({
    name: 'target_channel_uuid',
    length: 255,
  })
  targetChannelUuid: string;

  @PrimaryColumn({
    name: 'command_value',
    length: 255,
  })
  commandValue: string;
}
