import { Module } from '@nestjs/common';
import { LeaderboardCommand } from 'src/discord/leaderboard.command';
import { PingCommand } from 'src/discord/ping.command';

@Module({
  providers: [PingCommand, LeaderboardCommand],
})
export class BotSlashCommandsModule {}
