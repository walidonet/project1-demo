import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { User } from './models/user.entity';
import { Printing } from './models/printing.entity';
import { PrintingModule } from './printing/printing.module';
import { MediaModule } from './media/media.module';
import { Media } from './models/media.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'projectdemodb',
      entities: [User, Printing, Media],
      synchronize: true,
    }),
    UserModule,
    PrintingModule,
    MediaModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
