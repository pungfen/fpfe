import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'

try {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await app.listen(3000)
} catch (e) {
  console.error(e)
}
