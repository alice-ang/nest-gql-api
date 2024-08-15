import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  // created application instance using NestFactory
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // used the port value here
  await app.listen(configService.get('app.port') || 8000);
}
bootstrap();
