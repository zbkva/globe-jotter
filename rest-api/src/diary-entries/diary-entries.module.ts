import { Module } from '@nestjs/common';
import { DiaryEntriesService } from './diary-entries.service';
import { DiaryEntriesController } from './diary-entries.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { S3Module } from '../s3/s3.module';

@Module({
  controllers: [DiaryEntriesController],
  providers: [DiaryEntriesService],
  imports: [PrismaModule, S3Module],
})
export class DiaryEntriesModule {}
