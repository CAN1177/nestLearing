import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AaaException } from './AaaException';

@Catch(AaaException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      // const request = ctx.getRequest<Request>();

      response.status(500).json({
        aaa: exception.bbb,
        bbb: exception.aaa,
      });
    } else if (host.getType() === 'ws') {
      // WebSocket
    } else if (host.getType() === 'rpc') {
      // 基于 tcp 的微服务
    }
  }
}
