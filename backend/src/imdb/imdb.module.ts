import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ImdbController } from './Controllers/imdb.controller';
import { ImdbService } from './Services/imdb.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      baseURL: process.env.IMDB_BASE_URL,
      params: {
        apikey: process.env.IMDB_API_TOKEN,
      },
    }),
  ],
  controllers: [ImdbController],
  providers: [ImdbService],
})
export class ImdbModule {}
