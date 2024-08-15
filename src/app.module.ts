import { Module } from '@nestjs/common';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { configLoads } from './config';
import { DiscordModule } from '@discord-nestjs/core';
import { BotModule } from './bot/bot.module';
import { GatewayIntentBits } from 'discord.js';
import { BotSlashCommandsModule } from './bot/bot-slash-commands.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: configLoads,
      envFilePath: ['.env', '.env.local'],
    }),
    DiscordModule.forRootAsync({
      useFactory: () => ({
        token: process.env.DISCORD_BOT_TOKEN,
        discordClientOptions: {
          intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
        },
      }),
    }),
    TodoModule,
    BotModule,
    BotSlashCommandsModule,
  ],

  providers: [PrismaService],
})
export class AppModule {}
