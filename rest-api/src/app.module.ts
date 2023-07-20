import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { DiaryEntriesModule } from './diary-entries/diary-entries.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    UsersModule,
    AuthModule,
    PassportModule.register({ session: true }),
    DiaryEntriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
