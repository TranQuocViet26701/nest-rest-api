import { CreateItemDto } from './dto/creat-item.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAll(@Req() req: Request): Promise<Item[]> {
    console.log('req headers: ', req.headers);

    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create({ ...createItemDto });
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createItemDto: CreateItemDto,
  ): Promise<Item> {
    return this.itemsService.update(id, createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
