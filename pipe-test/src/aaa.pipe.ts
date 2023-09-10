import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AaaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('%c Line:6 🥔 value', 'color:#6ec1c2', value);
    console.log('%c Line:6 🍰 metadata', 'color:#b03734', metadata);
    return 'aaa';
  }
}
