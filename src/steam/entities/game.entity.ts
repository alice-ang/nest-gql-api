import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Game {
  @Field(() => Number)
  appid: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Number)
  playtime_forever: number;

  @Field({ defaultValue: 0, nullable: true })
  playtime_windows_forever: number;

  @Field({ defaultValue: 0, nullable: true })
  playtime_mac_forever: number;

  @Field({ defaultValue: 0, nullable: true })
  playtime_linux_forever: number;

  @Field({ defaultValue: 0, nullable: true })
  playtime_deck_forever: number;

  @Field()
  rtime_last_played: number;

  @Field({ defaultValue: 0, nullable: true })
  playtime_disconnected: number;

  @Field({ defaultValue: 0, nullable: true })
  playtime_2weeks: number;

  @Field({ nullable: true })
  img_icon_url?: string;
}
