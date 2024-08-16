import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';

@Command({
  name: 'ping',
  description: 'Responds with PONG!',
})
@Injectable()
export class PingCommand {
  @Handler()
  onPing(): string {
    return 'PONG!';
  }
}
