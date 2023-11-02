import { Injectable, Logger } from '@nestjs/common';
import { FortyTwoUserDto } from './dto/fortytwo-user.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  // constructor(private readonly connection: Connection) {}

  async validateUser(userData: FortyTwoUserDto) {
    // const queryRunner = this.connection.createQueryRunner();
    // 유저 정보를 이용해 유저를 찾는다.
    // const user = await this.
  }
}
