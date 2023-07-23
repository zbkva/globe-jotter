import { Injectable } from '@nestjs/common';
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class DiaryEntriesService {
  constructor(private prisma: PrismaService, private s3: S3Service) {}
  create(createDiaryEntryDto: CreateDiaryEntryDto) {
    return 'This action adds a new diaryEntry';
  }

  findAll(userId: string) {
    return this.prisma.diaryEntry.findMany({
      where: { userId: userId },
    });
  }

  findOne(id: string) {
    return this.prisma.diaryEntry.findUnique({ where: { id } });
  }

  findPicture() {
    return this.s3.getObject();
  }

  update(id: number, updateDiaryEntryDto: UpdateDiaryEntryDto) {
    return `This action updates a #${id} diaryEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} diaryEntry`;
  }
}
