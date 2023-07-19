import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GoogleStrategy } from './utils/google.strategy';
import { AuthService } from './auth.service';
import { SessionSerializer } from './utils/Serializer';

@Module({
  imports: [ConfigModule, PrismaModule],
  controllers: [AuthController],
  providers: [GoogleStrategy, AuthService, SessionSerializer],
})
export class AuthModule {}
