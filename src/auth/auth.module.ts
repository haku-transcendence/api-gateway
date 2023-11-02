import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersRepository } from 'src/users/users.repository';
import { AuthFortyTwoService } from './auth-fortytwo.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthFortyTwoService, UsersRepository],
  imports: [TypeOrmModule.forFeature([User])],
})
export class AuthModule {}
