import { Controller, Get } from '@nestjs/common'

import { OssDto } from '../dtos/oss.dto'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Oss')
@Controller('oss')
export class OssController {
  @Get()
  @ApiOperation({ summary: '获取Oss配置' })
  @ApiResponse({ status: 200, description: '' })
  async listAll(): Promise<OssDto[]> {
    return []
  }
}
