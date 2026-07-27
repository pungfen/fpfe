import { Module } from '@nestjs/common'

import { OssService } from '../services/oss.service'
import { OssController } from '@/controllers/oss.controller'

@Module({
  controllers: [OssController],
  providers: [OssService]
})
export class OssModule {}
