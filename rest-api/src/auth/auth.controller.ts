import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleOauthGuard } from './utils/google-oauth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleOauthGuard)
  async auth() {
    console.log('login endpoint');
    return { msg: 'Google Authentication' };
  }

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  handleRedirect() {
    console.log('callback endpoint');
    return { msg: 'redirect' };
  }

  @Get('status')
  user(@Req() req: Request) {
    if (req.user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
