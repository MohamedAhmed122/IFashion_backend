import { ControllerEndpoints } from './../constants/index';
import { CreateStoreDto } from './dto/createStore.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoresService } from './stores.service';
import { Stores } from './interfaces/stores.interfaces';

@Controller(ControllerEndpoints.Stores)
export class StoresController {
  constructor(private readonly storeService: StoresService) {}
  @Get()
  async getStores(): Promise<Stores[]> {
    return this.storeService.getStores();
  }
  @Get(':id')
  async getStoreById(@Param('id') id: string): Promise<Stores> {
    return this.storeService.getStoreById(id);
  }
  @Post()
  create(@Body() createStoreDto: CreateStoreDto): Promise<Stores> {
    return this.storeService.addNewStore(createStoreDto);
  }
}
