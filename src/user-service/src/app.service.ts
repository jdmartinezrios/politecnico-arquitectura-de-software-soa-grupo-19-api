import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiVersion(): string {
    return 'user-service';
  }
}
