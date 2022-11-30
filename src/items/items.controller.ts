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
  findAll(@Req() req: Request): Item[] {
    console.log('req headers: ', req.headers);

    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action return a #${id} item`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `This action adds a new item {name: ${createItemDto.name}, desc: ${createItemDto.desc}}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createItemDto: CreateItemDto) {
    return `This action updates #${id} item with {name: ${createItemDto.name}, desc: ${createItemDto.desc}}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action removes #${id} item`;
  }
}
