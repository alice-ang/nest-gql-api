import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Achievement {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  achieved: number;
}
