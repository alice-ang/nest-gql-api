import { Field, InputType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SigninResponse {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;

  @Field(() => User)
  user: User;
}
