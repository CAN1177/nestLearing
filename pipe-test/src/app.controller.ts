import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('aa', ParseIntPipe) aa: string): string {
    return aa + 1;
    // return this.appService.getHello();
  }

  @Get('bb')
  bb(
    @Query(
      'aa',
      new ParseIntPipe({
        exceptionFactory: (msg) => {
          console.log('%c Line:17 🍭 msg', 'color:#b03734', msg);
          throw new HttpException('xxx' + msg, HttpStatus.NOT_IMPLEMENTED);
        },
      }),
    )
    aa: string,
  ): string {
    return aa + 1;
  }

  @Get('nnn/:bbb')
  nnn(@Query('aaa', AaaPipe) aaa: string, @Param('bbb', AaaPipe) bbb: number) {
    return aaa + bbb;
  }
}
