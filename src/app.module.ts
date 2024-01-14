// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://wer123:wer123456@cluster0.fkvq8ig.mongodb.net/?retryWrites=true&w=majority', {
    }),
    UserModule,
    AuthModule,
    CityModule,
  ],
})
export class AppModule {}
