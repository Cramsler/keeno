import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from '../Services/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly service: MoviesService) {}

  @Get()
  async getAll(@Query('page') page) {
    const { data } = await this.service.getAll(page);
    return data;
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.service.getOne(id);
  }
}
