import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtPayloadWithRefreshToken } from '../types';

export const CurrentUser = createParamDecorator(
  (
    data: keyof JwtPayloadWithRefreshToken | undefined,
    context: ExecutionContext,
  ) => {
    if (context.getType() === 'http') {
      // För REST API-förfrågningar
      return context.switchToHttp().getRequest();
    }
    // För GraphQL-förfrågningar
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    if (data) {
      return req.user[data];
    }

    return req.user;
  },
);
