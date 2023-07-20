import { Module } from '@nestjs/common';
import { DiaryEntriesService } from './diary-entries.service';
import { DiaryEntriesController } from './diary-entries.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DiaryEntriesController],
  providers: [DiaryEntriesService],
  imports: [PrismaModule],
})
export class DiaryEntriesModule {}
