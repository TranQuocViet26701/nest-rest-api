import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import keys from './config/keys';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [MongooseModule.forRoot(keys.mongoURI), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
