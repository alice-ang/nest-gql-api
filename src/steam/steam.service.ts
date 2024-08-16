import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';
import { PlayerSpecificInput } from './dto/player-specific.input';
import { GameInput } from './dto/game.input';

@Injectable()
export class SteamService {
  private readonly apiKey = process.env.STEAM_API_KEY;
  private readonly baseUrl = 'https://api.steampowered.com';

  constructor(private httpService: HttpService) {}

  async getPlayerSummary(playerSpecificInput: PlayerSpecificInput) {
    const url = `${this.baseUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${this.apiKey}&steamids=${playerSpecificInput.steamId}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getOwnedGames(playerSpecificInput: PlayerSpecificInput) {
    const gamesUrl = `${this.baseUrl}/IPlayerService/GetOwnedGames/v0001/?key=${this.apiKey}&steamid=${playerSpecificInput.steamId}&format=json`;
    const response = await firstValueFrom(this.httpService.get(gamesUrl));

    return response.data;
  }
  async getRecentlyPlayedGames(playerSpecificInput: PlayerSpecificInput) {
    const gamesUrl = `${this.baseUrl}/IPlayerService/GetRecentlyPlayedGames/v0001/?&key=${this.apiKey}&steamid=${playerSpecificInput.steamId}`;
    const response = await firstValueFrom(this.httpService.get(gamesUrl));
    return response.data;
  }

  async getPlayerAchievements(playerSpecificInput: PlayerSpecificInput) {
    const url = `${this.baseUrl}/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${playerSpecificInput.appId}&key=${this.apiKey}&steamid=${playerSpecificInput.steamId}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getPlayerStats(playerSpecificInput: PlayerSpecificInput) {
    const url = `${this.baseUrl}/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${playerSpecificInput.appId}&key=${this.apiKey}&steamid=${playerSpecificInput.steamId}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getGameGlobalAchievements(gameInput: GameInput) {
    const gamesUrl = `${this.baseUrl}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${gameInput.appId}&format=json`;
    const response = await firstValueFrom(this.httpService.get(gamesUrl));
    return response.data;
  }

  async getGameNews(gameInput: GameInput) {
    const newsUrl = `${this.baseUrl}/ISteamNews/GetNewsForApp/v0002/?appid=${gameInput.appId}&count=3&maxlength=300&format=json`;
    const response = await firstValueFrom(this.httpService.get(newsUrl));
    return response.data;
  }
}
