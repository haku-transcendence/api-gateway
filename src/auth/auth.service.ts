import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { FortyTwoUserDto } from './dto/fortytwo-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}
  private readonly logger = new Logger(AuthService.name);

  // constructor(private readonly connection: Connection) {}

  async validateUser(userData: FortyTwoUserDto) {
    // const queryRunner = this.connection.createQueryRunner();
    // 유저 정보를 이용해 유저를 찾는다.
    let user = await this.usersRepository.findByEmail(userData.email);
    if (!user) {
      // 유저가 없다면 유저를 생성한다.
      user = this.usersRepository.create(userData);
      this.logger.log(`유저 생성: ${userData.email}`);
    }
    return user;
  }
}
