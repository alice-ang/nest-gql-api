import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Stats {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  value: number;
}
