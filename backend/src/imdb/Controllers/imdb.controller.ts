import { Controller, Get, Query } from '@nestjs/common';
import { ImdbService } from '../Services/imdb.service';

@Controller('imdb')
export class ImdbController {
  constructor(private readonly service: ImdbService) {}

  @Get()
  async getFullInfo(@Query('imdbId') imdbId) {
    const response = await this.service.getFullInfo(imdbId);
    return response.data;
  }
}
