import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Game } from './game.entity';

@ObjectType()
export class OwnedGames {
  @Field(() => Int)
  game_count: number;

  @Field(() => [Game])
  games: Game[];
}
