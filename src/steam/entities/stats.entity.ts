import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Stats {
  @Field(() => String)
  name: string;
}
