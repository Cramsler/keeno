import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MediaTypesEnum, OrderingTypesEnum } from '../../Types/RequestParams';

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {}

  getAll(page) {
    const queryString = `${MediaTypesEnum.MOVIES}?ordering=${OrderingTypesEnum.ID}&direction=desc&page=${page}&limit=18`;
    return this.httpService.axiosRef.get(queryString);
  }

  async getOne(id) {
    const queryString = `${MediaTypesEnum.MOVIES}?id=${id}`;
    const response = await this.httpService.axiosRef.get(queryString);
    return response.data.data[0];
  }
}
