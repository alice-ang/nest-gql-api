import { Module } from '@nestjs/common';
import { PingCommand } from 'src/discord/ping.command';

@Module({
  providers: [PingCommand],
})
export class BotSlashCommandsModule {}
