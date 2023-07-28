import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PicturesService {
  constructor(private prisma: PrismaService) {}
  create(createPictureDto: CreatePictureDto) {
    return 'This action adds a new picture';
  }

  findAll(diaryEntryId: string) {
    return this.prisma.picture.findMany({
      where: { diaryEntryId: diaryEntryId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} picture`;
  }

  update(id: number, updatePictureDto: UpdatePictureDto) {
    return `This action updates a #${id} picture`;
  }

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
