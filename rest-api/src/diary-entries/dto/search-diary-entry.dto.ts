import { Transform } from 'class-transformer';
import { IsString, IsEnum, IsOptional, ValidateIf } from 'class-validator';

enum SortValueEnum {
  NAME = 'name',
  CREATEDAT = 'createdAt',
  RATING = 'rating',
}

enum SortOrderEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export class SearchDiaryEntry {
  @IsOptional()
  @IsString()
  search?: string;

  //@ValidateIf((s) => s.sortValue !== '')
  @IsOptional()
  @IsEnum(SortValueEnum)
  @Transform((params) =>
    params.value?.length > 0 ? params.value : SortValueEnum.CREATEDAT,
  )
  sortValue?: SortValueEnum = SortValueEnum.CREATEDAT;

  //@ValidateIf((s) => s.sortOrder !== '')
  @IsOptional()
  @IsEnum(SortOrderEnum)
  @Transform((params) =>
    params.value?.length > 0 ? params.value : SortOrderEnum.DESC,
  )
  sortOrder?: SortOrderEnum = SortOrderEnum.DESC;
}
