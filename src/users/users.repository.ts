import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private dataSource: DataSource,
  ) {
    super(User, dataSource.manager);
  }

  // async findById(id: number): Promise<User> {
  //   return this.findOne({ where: { id: id } });
  // }

  async findByEmail(email: string): Promise<User> {
    return this.findOne({ where: { email: email } });
  }
}
