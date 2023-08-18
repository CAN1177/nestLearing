import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Silva } from './silva';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    Silva,
    {
      provide: 'Silva',
      useFactory: () => {
        return {
          name: 'Silva',
        };
      },
    },
  ],
})
export class AppModule {}
