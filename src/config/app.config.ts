import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  name: process.env.APP_NAME,
  workingDirectory: process.env.PWD || process.cwd(),
  port: process.env.APP_PORT,
  jwtAccessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  jwtRefreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
}));
