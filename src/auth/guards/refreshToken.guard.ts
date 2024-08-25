import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RefreshTokenGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    if (context.getType() === 'http') {
      // För REST API-förfrågningar
      return context.switchToHttp().getRequest();
    }
    // För GraphQL-förfrågningar
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
