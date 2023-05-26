import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/person')
export class PersonController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // query 数据传输
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }

  // url param 数据传输
  @Get(':id')
  urlParm(@Param('id') id: string) {
    return `received: id=${id}`;
  }

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor())
  body2(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
