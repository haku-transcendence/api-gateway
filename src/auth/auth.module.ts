import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthFortyTwoService } from './auth-fortytwo.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthFortyTwoService],
})
export class AuthModule {}
