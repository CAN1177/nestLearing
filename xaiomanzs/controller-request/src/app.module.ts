import { Module, Inject } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service2';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    AppService2,
    {
      provide: 'ABC',
      useClass: AppService,
    },
    {
      provide: 'Def',
      useValue: ['Hello World 自定义注入值', '哈哈哈'],
    },
    {
      provide: 'CCC',
      inject: [AppService2],
      // useFactory: (AppService2: AppService2) => {
      //   console.log(
      //     '%c Line:24 🍖 AppService2',
      //     'color:#ed9ec7',
      //     AppService2.getHello(),
      //   );
      //   return '123 AppService2';
      // },
      // 异步工厂模式
      useFactory: async (AppService2: AppService2) => {
        return await new Promise((r) => {
          setTimeout(() => {
            r(AppService2.getHello());
          }, 2000);
        });
      },
    },
  ],
})
export class AppModule {}
