import { Args, Query, Resolver } from '@nestjs/graphql';
import { GameInput } from './dto/game.input';
import { PlayerSpecificInput } from './dto/player-specific.input';
import { PlayerSummary } from './entities/player-summary.entity';

import { HttpException, HttpStatus } from '@nestjs/common';
import { Steam } from './entities/steam.entity';
import { SteamService } from './steam.service';
import { GameNews } from './entities/game-news.entity';
import { PlayerStats } from './entities/player-stats.entity';

@Resolver(() => Steam)
export class SteamResolver {
  constructor(private readonly steamService: SteamService) {}

  @Query(() => PlayerStats, { name: 'playerStats' })
  async getPlayerStats(
    @Args('playerSpecificInput') playerSpecificInput: PlayerSpecificInput,
  ) {
    try {
      const achievementsSummary =
        await this.steamService.getPlayerStats(playerSpecificInput);

      if (!achievementsSummary.playerstats) {
        throw new HttpException(
          'Game achievemnts not found',
          HttpStatus.NOT_FOUND,
        );
      }

      return achievementsSummary.playerstats;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to game achievemnt data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => PlayerSummary, { name: 'playerSummary' })
  async getPlayerSummary(
    @Args('playerSpecificInput') playerSpecificInput: PlayerSpecificInput,
  ) {
    try {
      const playerSummary =
        await this.steamService.getPlayerSummary(playerSpecificInput);

      if (!playerSummary.response.players.length) {
        throw new HttpException('Player not found', HttpStatus.NOT_FOUND);
      }

      return playerSummary.response.players[0];
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch player data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => [Steam], { name: 'ownedGames' })
  getOwnedGames(
    @Args('playerSpecificInput') playerSpecificInput: PlayerSpecificInput,
  ) {
    return this.steamService.getOwnedGames(playerSpecificInput);
  }

  @Query(() => [Steam], { name: 'recentlyPlayed' })
  getRecentlyPlayedGames(
    @Args('playerSpecificInput') playerSpecificInput: PlayerSpecificInput,
  ) {
    return this.steamService.getRecentlyPlayedGames(playerSpecificInput);
  }

  @Query(() => [Steam], { name: 'playerAchievements' })
  async getPlayerAchievements(
    @Args('playerSpecificInput') playerSpecificInput: PlayerSpecificInput,
  ) {
    try {
      const achievementsSummary =
        await this.steamService.getPlayerAchievements(playerSpecificInput);

      if (!achievementsSummary) {
        throw new HttpException(
          'Game achievemnts not found',
          HttpStatus.NOT_FOUND,
        );
      }

      return achievementsSummary;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to game achievemnt data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => Steam, { name: 'gameAchievements' })
  getGameAchievements(@Args('gameInput') gameInput: GameInput) {
    return this.steamService.getGameAchievements(gameInput);
  }

  @Query(() => GameNews, { name: 'gameNews' })
  async getGameNews(@Args('gameInput') gameInput: GameInput) {
    try {
      const gameSummary = await this.steamService.getGameNews(gameInput);

      if (!gameSummary) {
        throw new HttpException('No game news found', HttpStatus.NOT_FOUND);
      }

      return gameSummary.appnews;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch game news',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
