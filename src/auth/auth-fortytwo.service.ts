import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { FortyTwoUserDto } from './dto/fortytwo-user.dto';

@Injectable()
export class AuthFortyTwoService {
  private readonly logger = new Logger(AuthFortyTwoService.name);
  private readonly baseUrl = 'https://api.intra.42.fr';

  async getAccessToken(code: string): Promise<string> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/oauth/token`,
        {
          grant_type: 'authorization_code',
          client_id: process.env.FORTYTWO_CLIENT_ID,
          client_secret: process.env.FORTYTWO_CLIEND_SECRET,
          code,
          redirect_uri: process.env.FORTYTWO_REDIRECT_URI,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data.access_token;
    } catch (error) {
      this.logger.error(error);
      throw new UnauthorizedException('Invalid code');
    }
  }

  async getUserData(accessToken: string): Promise<FortyTwoUserDto> {
    try {
      const response = await axios.get(`${this.baseUrl}/v2/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userData: FortyTwoUserDto = {
        nickname: response.data.login,
        email: response.data.email,
      };
      return userData;
    } catch (error) {
      this.logger.error(error);
      throw new UnauthorizedException('Invalid access token');
    }
  }
}
