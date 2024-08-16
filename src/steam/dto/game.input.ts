import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GameInput {
  @Field(() => String)
  appId: string;
}
