// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.stratergy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    PassportModule,
    JwtModule.register({
      secret: '<your secret>', // Change this to a secret key for JWT
      signOptions: { expiresIn: '1h' }, // Set the expiration time for the token
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
