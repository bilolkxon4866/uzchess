import { Body, Controller, Post } from '@nestjs/common';
import { UsersPublicService } from '../../services/users/users.public.service';
import { SignUpDto } from '../../dtos/users/public/sign-up.dto';
import { SignInDto } from '../../dtos/users/public/sign-in.dto';
import { VerifyOtpDto } from '../../dtos/users/public/verify-otp.dto';
import { ResendOtpDto } from '../../dtos/users/public/resend-otp.dto';
import { SetPasswordDto } from '../../dtos/users/public/set-password.dto';

@Controller('auth')
export class UsersPublicController{
  constructor(private readonly authService: UsersPublicService) {}

  @Post('sign-up')
  async signUp(@Body() payload: SignUpDto) {
    return await this.authService.signUp(payload);
  }

  @Post('sign-in')
  async signIn(@Body() payload: SignInDto) {
    return await this.authService.signIn(payload);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() payload: VerifyOtpDto) {
    return await this.authService.verifyOtp(payload);
  }

  @Post('resend-otp')
  async resendOtp(@Body() payload: ResendOtpDto) {
    return await this.authService.resendOtp(payload);
  }

  @Post('set-password')
  async setPassword(@Body() payload: SetPasswordDto) {
    return await this.authService.setPassword(payload);
  }
}
