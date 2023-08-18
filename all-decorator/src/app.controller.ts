import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('Silva')
  private readonly silva: Record<string, any>;

  @Get()
  getHello(): string {
    console.log(this.silva);
    return this.appService.getHello();
  }
}
