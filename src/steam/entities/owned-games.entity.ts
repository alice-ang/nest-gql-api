import { Field, ObjectType } from '@nestjs/graphql';
import { Game } from './game.entity';

@ObjectType()
export class OwnedGames {
  @Field(() => Number)
  game_count: number;

  @Field(() => [Game])
  games: Game[];
}
