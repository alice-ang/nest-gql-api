import { Args, Query, Resolver } from '@nestjs/graphql';
import { GameInput } from './dto/game.input';
import { PlayerSpecificInput } from './dto/player-specific.input';
import { PlayerSummary } from './entities/player-summary.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Steam } from './entities/steam.entity';
import { SteamService } from './steam.service';
import { GameNews } from './entities/game-news.entity';
import { PlayerStats } from './entities/player-stats.entity';
import { OwnedGames } from './entities/owned-games.entity';
import { RecentlyPlayed } from './entities/recently.played.entity';
import { GlobalAchievements } from './entities/global-achievements.entity';

@Resolver(() => Steam)
export class SteamResolver {
  constructor(private readonly steamService: SteamService) {}

  @Query(() => PlayerStats, { name: 'getPlayerStats' })
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

  @Query(() => PlayerSummary, { name: 'getPlayerSummary' })
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

  @Query(() => OwnedGames, { name: 'getOwnedGames' })
  async getOwnedGames(
    @Args('playerSpecificInput') playerSpecificInput: PlayerSpecificInput,
  ) {
    try {
      const ownedGames =
        await this.steamService.getOwnedGames(playerSpecificInput);

      if (!ownedGames.response.game_count) {
        throw new HttpException(
          'No games found for this player',
          HttpStatus.NOT_FOUND,
        );
      }

      return ownedGames.response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch owned games',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => RecentlyPlayed, { name: 'getRecentlyPlayed' })
  async getRecentlyPlayedGames(
    @Args('playerSpecificInput') playerSpecificInput: PlayerSpecificInput,
  ) {
    try {
      const recentlyPlayed =
        await this.steamService.getRecentlyPlayedGames(playerSpecificInput);

      if (!recentlyPlayed.response.total_count) {
        throw new HttpException(
          'No recently played games found for this player',
          HttpStatus.NOT_FOUND,
        );
      }

      return recentlyPlayed.response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch recently played games',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => [Steam], { name: 'getPlayerAchievements' })
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

  @Query(() => GlobalAchievements, { name: 'getGlobalGameAchievements' })
  async getGlobalGameAchievements(@Args('gameInput') gameInput: GameInput) {
    try {
      const gameSummary =
        await this.steamService.getGameGlobalAchievements(gameInput);

      if (!gameSummary.achievementpercentages) {
        throw new HttpException('No game data found', HttpStatus.NOT_FOUND);
      }

      return gameSummary.achievementpercentages;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch game data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => GameNews, { name: 'getGameNews' })
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
