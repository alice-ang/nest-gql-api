import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewsItem {
  @Field(() => String)
  gid: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  url: string;
  @Field(() => Boolean)
  is_external_ur: boolean;

  @Field(() => String)
  author: string;

  @Field(() => String)
  contents: string;

  @Field(() => String)
  feedlabel: string;

  @Field(() => Date) // unix timestamp number
  date: Date;

  @Field(() => String)
  feedname: string;

  @Field(() => Number)
  feed_type: number;

  @Field(() => Number)
  appid: number;
}
