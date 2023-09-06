import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  Headers,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders, MyQuery } from './my.decorator';
import { Ddd } from './ddd.decorator';

@Ddd('eee', '21silva')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('hello3', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello4')
  getHello4(@Ccc() arg) {
    return arg;
  }

  @Get('hello5')
  getHello5(@Headers('accept') headers1, @MyHeaders('accept') headers2) {
    console.log('%c Line:38 🍿 headers2', 'color:#ffdd4d', headers2);
    console.log('%c Line:38 🍺 headers1', 'color:#7f2b82', headers1);
  }

  @Get('hello6')
  getHello6(@Query('aaa') aaa, @MyQuery('bbb') bbb) {
    console.log('aaa', aaa);
    console.log('bbb', bbb);
  }

  @Get('hello7')
  getHello7(
    @Query('aaa', new ParseIntPipe()) aaa,
    @MyQuery('bbb', new ParseIntPipe()) bbb,
  ) {
    console.log('aaa', aaa + 1);
    console.log('bbb', bbb + 1);
  }
}
