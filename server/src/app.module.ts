import { Module } from '@nestjs/common'
// import { ConfigModule } from '@nestjs/config'

// import { OssModule } from '@/modules/oss.module'
import { AppService } from './app.service'
import { AppController } from './app.controller'

@Module({
  controllers: [AppController],
  imports: [],
  providers: [AppService]
})
export class AppModule {
  onApplicationBootstrap() {
    console.log('App is running in http://localhost:3000 ...')
  }
}
