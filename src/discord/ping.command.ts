import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';

@Command({
  name: 'ping',
  description: 'Responds with pong',
})
@Injectable()
export class PingCommand {
  @Handler()
  onPlaylist(): string {
    return 'PONG!';
  }
}
