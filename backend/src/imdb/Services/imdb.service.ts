import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ImdbService {
  constructor(private readonly httpService: HttpService) {}

  getFullInfo(imdbId) {
    return this.httpService.axiosRef.get(`?i=${imdbId}`);
  }
}
