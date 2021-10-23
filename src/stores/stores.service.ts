import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stores } from './interfaces/stores.interfaces';

@Injectable()
export class StoresService {
  constructor(
    @InjectModel('Store') private readonly storeModel: Model<Stores>,
  ) {}

  async getStores(): Promise<Stores[]> {
    return await this.storeModel.find();
  }
  async getStoreById(id: string): Promise<Stores> {
    return await this.storeModel.findOne({ _id: id });
  }
  async addNewStore(store: Stores): Promise<Stores> {
    const newIItem = new this.storeModel(store);
    return await newIItem.save();
  }
}
