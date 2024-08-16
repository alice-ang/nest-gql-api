import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';

@Command({
  name: 'leaderboard',
  description: 'Lists users by most walked steps',
})
@Injectable()
export class LeaderboardCommand {
  @Handler()
  onLeaderboard(): string {
    return 'Walk!!';
  }
}
