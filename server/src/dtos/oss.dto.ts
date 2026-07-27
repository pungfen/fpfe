import { IsString } from 'class-validator'

import { IDto } from './dto'

export class OssDto extends IDto {
  @IsString()
  key?: string
}
