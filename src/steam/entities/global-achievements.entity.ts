import { Field, ObjectType } from '@nestjs/graphql';
import { Achievement } from './achievement.entity';

@ObjectType()
export class GlobalAchievements {
  @Field(() => [Achievement])
  achievements: Achievement[];
}
