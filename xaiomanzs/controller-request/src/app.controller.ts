import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('ABC') private readonly appService: AppService,
    @Inject('Def') private readonly show: string[],
    @Inject('CCC') private readonly ccc: string,
  ) {}

  @Get()
  getHello(): string {
    return this.ccc;
  }
}
