import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value.size > 10 * 1024) {
      throw new HttpException('文件大于10K', HttpStatus.BAD_REQUEST);
    }

    return value;
  }
}
