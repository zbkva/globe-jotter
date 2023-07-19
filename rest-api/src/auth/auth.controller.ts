import { Controller, Get, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleOauthGuard } from './utils/google-oauth.guard';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleOauthGuard)
  async auth() {
    console.log('Initiated authentication');
  }

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  //@Redirect('http://localhost:3000/auth/callback')
  handleRedirect(@Req() req: Request, @Res() res: Response) {
    //res.cookie('id_token', req.cookies, { expires });
    console.log('Redirected to client');
    console.log('testing res: ', res);
    res.redirect('http://localhost:3000/auth/callback');
  }

  @Get('user')
  user(@Req() req: Request) {
    return { user: req?.user };
    if (req.user) {
      return { isAuthenticated: true, user: req.user };
    } else {
      return { isAuthenticated: false, user: null };
    }
  }
}
