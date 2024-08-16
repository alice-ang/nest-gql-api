import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => Boolean)
  isCompleted: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
