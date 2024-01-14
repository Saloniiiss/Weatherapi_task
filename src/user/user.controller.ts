// user.controller.ts
import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body('username') username: string, @Body('password') password: string) {
    try {
      const user = await this.userService.createUser(username, password);
      return { statusCode: HttpStatus.CREATED, data: user };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'User creation failed' }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    try {
      const user = await this.userService.validateUser(username, password);
      if (!user) {
        throw new HttpException({ statusCode: HttpStatus.UNAUTHORIZED, message: 'Invalid credentials' }, HttpStatus.UNAUTHORIZED);
      }
      // You can generate a JWT token here if needed
      return { statusCode: HttpStatus.OK, message: 'Login successful', data: user };
    } catch (error) {
      throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: 'Login failed' }, HttpStatus.BAD_REQUEST);
    }
  }
}


