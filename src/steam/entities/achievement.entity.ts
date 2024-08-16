import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Achievement {
  @Field(() => String)
  name: string;

  @Field({ nullable: true })
  achieved: number;

  @Field({ nullable: true })
  percent: number;
}
