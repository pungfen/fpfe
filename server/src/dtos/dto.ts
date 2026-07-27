import { ApiProperty } from '@nestjs/swagger'

export class IDto {}

export class PagingDto {
  @ApiProperty()
  pageIndex: number = 0

  @ApiProperty()
  pageSize: number = 20

  @ApiProperty()
  pageTotal: number = 0
}
