import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LogOutResponse } from './dto/logout-response';
import { SignInInput } from './dto/signin-input';
import { SignInResponse } from './dto/signin-response';
import { SignUpInput } from './dto/signup-input';
import { Auth } from './entities/auth.entity';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignInResponse)
  signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signUp(signUpInput);
  }

  @Mutation(() => SignInResponse)
  signIn(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.singIn(signInInput);
  }

  @Mutation(() => LogOutResponse)
  async signOut(@Args('id', { type: () => Int }) id: number) {
    return this.authService.signOut(id);
  }
}
