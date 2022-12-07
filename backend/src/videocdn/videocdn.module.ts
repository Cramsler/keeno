import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MoviesController } from './Movies/Controllers/movies.controller';
import { SeriesController } from './Series/Controllers/series.controller';
import { SearchController } from './Common/Comtrollers/search.controller';
import { MoviesService } from './Movies/Services/movies.service';
import { SeriesService } from './Series/Services/series.service';
import { SearchService } from './Common/Services/search.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      baseURL: process.env.BASE_URL,
      params: {
        api_token: process.env.API_TOKEN,
      },
    }),
  ],
  controllers: [MoviesController, SeriesController, SearchController],
  providers: [MoviesService, SeriesService, SearchService],
})
export class VideoCdnModule {}
