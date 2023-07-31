import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { DiaryEntriesModule } from './diary-entries/diary-entries.module';
import { PicturesModule } from './pictures/pictures.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    UsersModule,
    DiaryEntriesModule,
    PicturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
