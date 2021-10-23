import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresController } from './stores/stores.controller';

import { StoresService } from './stores/stores.service';
// import { StoresModule } from './stores/stores.module';
import { StoresModule } from './stores/stores.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoURL =
  'mongodb+srv://admin:admin@cluster0.uuxz0.mongodb.net/Ifashion?retryWrites=true&w=majority';

@Module({
  imports: [StoresModule, MongooseModule.forRoot(mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
