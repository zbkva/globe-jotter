import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Logger,
} from '@nestjs/common';
import { DiaryEntriesService } from './diary-entries.service';
import { CreateDiaryEntryDto } from './dto/create-diary-entry.dto';
import { UpdateDiaryEntryDto } from './dto/update-diary-entry.dto';
import { SearchDiaryEntry } from './dto/search-diary-entry.dto';

@Controller('diaryentries')
export class DiaryEntriesController {
  private readonly logger = new Logger(DiaryEntriesController.name);
  constructor(private readonly diaryEntriesService: DiaryEntriesService) {}

  @Post()
  create(@Body() createDiaryEntryDto: CreateDiaryEntryDto) {
    return this.diaryEntriesService.create(createDiaryEntryDto);
  }

  @Get('users/:userId')
  findAll(@Param('userId') userId: string, @Query() search: SearchDiaryEntry) {
    return this.diaryEntriesService.findMany(userId, search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diaryEntriesService.findOne(id);
  }

  @Get('picture')
  findPicture() {
    return this.diaryEntriesService.findPicture();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiaryEntryDto: UpdateDiaryEntryDto,
  ) {
    return this.diaryEntriesService.update(+id, updateDiaryEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diaryEntriesService.remove(+id);
  }
}
