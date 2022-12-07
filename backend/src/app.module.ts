import { Module } from '@nestjs/common';
import { ImdbModule } from './imdb/imdb.module';
import { VideoCdnModule } from './videocdn/videocdn.module';
import { KinopoiskModule } from './KP/kinopoisk.module';

@Module({
  imports: [ImdbModule, VideoCdnModule, KinopoiskModule],
})
export class AppModule {}
