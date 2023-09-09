import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AaaMiddleware implements NestMiddleware {
  // @Inject(AppService)
  // private readonly appService: AppService;

  // 构造器注入更简洁些
  constructor(private readonly appService: AppService){}
  
  use(req: Request, res: Response, next: () => void) {
    console.log('%c Line:7 🍔', 'color:#ffdd4d', 'before');
    console.log("%c Line:12 🌭", "color:#6ec1c2", this.appService.getHello());
    next();
    console.log('%c Line:10 🧀', 'color:#ea7e5c', 'after');
  }
}
