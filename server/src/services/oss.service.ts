import { OssDto } from '@/dtos/oss.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class OssService {
  private readonly oss: OssDto[] = []

  listAll(): OssDto[] {
    return []
  }
}
