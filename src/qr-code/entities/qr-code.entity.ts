import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class QrCode {
  @Field(() => String)
  dataUrl: string;
}
