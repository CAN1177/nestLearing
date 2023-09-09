import { Controller, Get, Next, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    console.log('%c Line:11 🍰', 'color:#fca650', 'hello');
    return this.appService.getHello();
  }

  @Get('hello1')
  getHello1(): string {
    console.log('%c Line:11 🍰', 'color:#fca650', 'hello1');
    return this.appService.getHello();
  }

  @Get('world')
  getWorld1(): string {
    console.log('%c Line:11 🍰', 'color:#fca650', 'world1');
    return this.appService.getHello();
  }

  @Get('world2')
  getWorld2(): string {
    console.log('%c Line:11 🍰', 'color:#fca650', 'world2');
    return this.appService.getHello();
  }

  @Get('aaa')
  a1(@Next() next, @Response({ passthrough: true }) response) {
    return 'hello';
  }

  @Get('bbb')
  b1(@Next() next) {
    next();
    return 'hello1';
  }

  @Get('bbb')
  b2() {
    return 'hello2';
  }
}
