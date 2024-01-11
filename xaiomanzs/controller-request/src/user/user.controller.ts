import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  @Post()
  create(@Request() req) {
    console.log('%c Line:27 🍐 req', 'color:#6ec1c2', req.body);
    return {
      code: 200,
      message: req.body.name,
    };
  }

  @Get()
  findAll(@Query() query) {
    console.log('%c Line:25 🥕 req', 'color:#4fff4B', query);
    return {
      code: 200,
      message: query.name,
    };
  }
  // 也可以这样直接发起get请求，获取请求参数
  // findAll(@Request() req) {
  //   console.log('%c Line:25 🥕 req', 'color:#4fff4B', req.query);
  //   return {
  //     code: 200,
  //     message: req.query.name,
  //   };
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('%c Line:53 🍩 id', 'color:#93c0a4', id);
    return {
      code: 200,
    };
    // return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
