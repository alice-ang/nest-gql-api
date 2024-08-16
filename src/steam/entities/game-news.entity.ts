import { Field, ObjectType } from '@nestjs/graphql';
import { NewsItem } from './news-item.entity';

@ObjectType()
export class GameNews {
  @Field(() => Number)
  appid: number;

  @Field(() => [NewsItem])
  newsitems: NewsItem[];

  @Field(() => Number)
  count: number;
}
