import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NewsItem } from './news-item.entity';

@ObjectType()
export class GameNews {
  @Field(() => Int)
  appid: number;

  @Field(() => [NewsItem])
  newsitems: NewsItem[];

  @Field(() => Int)
  count: number;
}
