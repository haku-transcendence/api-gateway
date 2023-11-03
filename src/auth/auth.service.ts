import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { FortyTwoUserDto } from './dto/fortytwo-user.dto';
import { Auth } from './entities/auth.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}
  private readonly logger = new Logger(AuthService.name);

  // constructor(private readonly connection: Connection) {}

  async validateUser(userData: FortyTwoUserDto) {
    // const queryRunner = this.connection.createQueryRunner();
    // 유저 정보를 이용해 유저를 찾는다.
    let user: User = await this.usersRepository.findByEmail(userData.email);
    console.log('---전---');
    this.logger.debug(user);
    if (!user) {
      user = this.usersRepository.create(userData);
      try {
        this.usersRepository.save(user);
      } catch (e) {
        console.log('error: ', e);
      }
      console.log('---후---');
      this.logger.debug(user.nickname);
      this.logger.log(`유저 생성: ${userData.email}`);
    }
    return user;
  }
}
