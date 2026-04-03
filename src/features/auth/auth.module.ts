import { Module } from '@nestjs/common';
import { UsersAdminService } from './services/users/users.admin.service';
import { UsersAdminController } from './controllers/users/users.admin.controller';
import { UsersPublicService } from './services/users/users.public.service';
import { UsersPublicController } from './controllers/users/users.public.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from '../../config/jwt-module.config';
import { OtpCodePublicService } from './services/otpCodes/otp-code.public.service';

@Module({
  providers : [
    UsersAdminService,
    UsersPublicService,
    OtpCodePublicService
  ],
  imports : [
    JwtModule.register(jwtModuleConfig)
  ],
  controllers : [
    UsersAdminController,
    UsersPublicController
  ]
})

export class AuthModule {}