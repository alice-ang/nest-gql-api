import { Module } from '@nestjs/common';
import { SteamService } from './steam.service';
import { SteamResolver } from './steam.resolver';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [SteamResolver, SteamService, PrismaService],
  exports: [SteamService],
})
export class SteamModule {}
