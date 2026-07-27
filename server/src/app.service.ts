import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getJsonStringExample() {
    const jsonString = JSON.stringify({ name: 'x' })

    return {
      jsonString
    }
  }
}
