import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Game } from './game.entity';

@ObjectType()
export class RecentlyPlayed {
  @Field(() => Int)
  total_count: number;

  @Field(() => [Game])
  games: Game[];
}
