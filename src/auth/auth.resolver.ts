import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/currentUser.decorator';
import { CurrentUserId } from './decorators/currentUserId.decorator';
import { Public } from './decorators/public.decorator';
import { LogOutResponse } from './dto/logout-response';
import { NewTokensResponse } from './dto/newTokens.response';
import { SignInInput } from './dto/signin-input';
import { SignInResponse } from './dto/signin-response';
import { SignUpInput } from './dto/signup-input';
import { RefreshTokenGuard } from './guards/refreshToken.guard';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => SignInResponse)
  signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signUp(signUpInput);
  }
  @Public()
  @Mutation(() => SignInResponse)
  signIn(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.singIn(signInInput);
  }

  @Mutation(() => LogOutResponse)
  async signOut(@Args('id', { type: () => Int }) id: number) {
    return this.authService.signOut(id);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => NewTokensResponse)
  getNewTokens(
    @CurrentUserId() userId: number,
    @CurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.getNewTokens(userId, refreshToken);
  }
}
