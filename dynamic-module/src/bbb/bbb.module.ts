import { DynamicModule, Module } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';

@Module({})
export class BbbModule {
  // 加一个 register 的静态方法，返回模块定义的对象
  static register(options: Record<string, any>): DynamicModule {
    return {
      // 和在装饰器里定义的时候的区别，只是多了一个 module 属性
      module: BbbModule,
      controllers: [BbbController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        BbbService,
      ],
      exports: [],
    };
  }
}
