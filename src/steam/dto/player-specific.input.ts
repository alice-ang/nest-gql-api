import { InputType, Field, PartialType } from '@nestjs/graphql';
import { GameInput } from './game.input';

@InputType()
export class PlayerSpecificInput extends PartialType(GameInput) {
  @Field(() => String)
  steamId: string;
}
