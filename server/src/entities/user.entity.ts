import { ApiProperty } from '@nestjs/swagger'

export class User {
  name?: string

  @ApiProperty({ name: '年龄' })
  age?: number
}
