import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class Silva {
  constructor(private appService: AppService) {}
}
