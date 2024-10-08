import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getApiVersion(): string {
    return 'mercado-libre-service';
  }
}
