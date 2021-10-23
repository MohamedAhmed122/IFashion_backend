import { Module } from '@nestjs/common';
import { StoreSchema } from './schema/stores.schema';
import { StoresController } from './stores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresService } from './stores.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
  ],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
