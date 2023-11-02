import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  private readonly logger = new Logger(UsersService.name);
}
