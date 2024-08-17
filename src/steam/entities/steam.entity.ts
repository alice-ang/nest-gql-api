import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Steam {
  @Field(() => String, { description: 'Steam Id of player account' })
  steamId: string;

  @Field(() => Int)
  communityvisibilitystate: number;

  @Field(() => Int)
  profilestate: number;

  @Field(() => String)
  personaname: string;

  @Field(() => Int)
  commentpermission: number;

  @Field(() => String)
  profileurl: string;

  @Field(() => String)
  avatar: string;

  @Field(() => String)
  avatarmedium: string;

  @Field(() => String)
  avatarfull: string;

  @Field(() => String)
  avatarhash: string;

  @Field(() => Int)
  lastlogoff: number;

  @Field(() => Int)
  personastate: number;

  @Field(() => String)
  primaryclanid: string;

  @Field(() => Int)
  timecreated: number;

  @Field(() => Int)
  personastateflags: number;
}
