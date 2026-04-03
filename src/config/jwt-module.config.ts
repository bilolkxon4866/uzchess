import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtModuleConfig: JwtModuleOptions = {
  global : true,
  secret: process.env.SECRET_KEY || 'salom_uzbekistom_mening_vatanim',
  signOptions: {
    expiresIn: '3h'
  }
}