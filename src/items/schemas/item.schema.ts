import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop()
  desc: string;

  @Prop()
  qty: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
