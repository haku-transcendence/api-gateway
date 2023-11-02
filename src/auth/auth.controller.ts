import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthFortyTwoService } from './auth-fortytwo.service';
import { FortyTwoUserDto } from './dto/fortytwo-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly authFortyTwoService: AuthFortyTwoService,
  ) {}

  @Post('signin')
  async signin(@Body() code: string) {
    // code를 이용해 access token을 받아온다.
    const fortyTwoAccessToken =
      await this.authFortyTwoService.getAccessToken(code);
    // access token을 이용해 42API에서 유저 정보를 받아온다.
    const fortyTwoUserDto: FortyTwoUserDto =
      await this.authFortyTwoService.getUserData(fortyTwoAccessToken);

    // 유저 정보를 이용해 유저를 찾는다.
    const user = await this.authService.validateUser(fortyTwoUserDto);
  }
}
