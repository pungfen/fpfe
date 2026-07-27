import { NestFactory } from '@nestjs/core'
import { Module, Controller, Get } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import type { NestExpressApplication } from '@nestjs/platform-express'
import {
  SwaggerModule,
  DocumentBuilder,
  ApiProperty,
  ApiTags,
  ApiOkResponse,
  getSchemaPath
} from '@nestjs/swagger'
// import { createClient } from '@fpfe/ali-oss/node'
import { IsString } from 'class-validator'
import Config from './config'

class OssDto {
  @ApiProperty({ name: '名称' })
  @IsString()
  name?: string
}

@ApiTags('oss')
@Controller('oss')
class OssController {
  constructor(private configService: ConfigService) {}

  @Get()
  @ApiOkResponse({
    schema: {
      allOf: [{ $ref: getSchemaPath(OssDto) }]
    }
  })
  async getOss(): Promise<OssDto> {
    return {
      name: 'xx'
    }
  }
}

@Module({
  imports: [ConfigModule.forRoot({ load: [Config] })],
  controllers: [OssController]
})
class AppModule {}

try {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const configService = app.get(ConfigService)

  const prefix = configService.get('prefix', 'api')
  const port = configService.get('port', 3000)

  app.setGlobalPrefix(prefix)

  SwaggerModule.setup(prefix, app, () =>
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Fp API Server')
        .setDescription('The Fp API description')
        .setVersion('1.0')
        .addTag('oss')
        .build()
    )
  )

  await app.listen(port)
} catch (e) {
  console.error(e)
}
