// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async login(user: any): Promise<{ access_token: string }> {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
