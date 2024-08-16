import { Field, ObjectType } from '@nestjs/graphql';
import { Game } from './game.entity';

@ObjectType()
export class RecentlyPlayed {
  @Field(() => Number)
  total_count: number;

  @Field(() => [Game])
  games: Game[];
}
