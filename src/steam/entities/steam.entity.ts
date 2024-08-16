import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Steam {
  @Field(() => String, { description: 'Steam Id of player account' })
  steamId: string;

  @Field(() => Number)
  communityvisibilitystate: number;

  @Field(() => Number)
  profilestate: number;

  @Field(() => String)
  personaname: string;

  @Field(() => Number)
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

  @Field(() => Number)
  lastlogoff: number;

  @Field(() => Number)
  personastate: number;

  @Field(() => String)
  primaryclanid: string;

  @Field(() => Number)
  timecreated: number;

  @Field(() => Number)
  personastateflags: number;
}
