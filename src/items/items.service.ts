import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    try {
      const item = await this.itemModel.findById(id);
      return item;
    } catch (err) {
      console.log('error: ', err);
    }
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id);
  }
}
