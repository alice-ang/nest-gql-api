import { Field, ObjectType } from '@nestjs/graphql';
import { Stats } from './stats.entity';
import { Achievement } from './achievement.entity';

@ObjectType()
export class PlayerStats {
  @Field(() => String, { description: 'Steam Id of player account' })
  steamID: string;

  @Field(() => String)
  gameName: string;

  @Field(() => [Achievement])
  achievements: Achievement[];

  @Field(() => [Stats])
  stats: Stats[];
}
