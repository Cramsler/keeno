import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MediaTypesEnum, OrderingTypesEnum } from '../../Types/RequestParams';

@Injectable()
export class SeriesService {
  constructor(private readonly httpService: HttpService) {}

  getAll(page) {
    const queryString = `${MediaTypesEnum.TV_SERIES}?ordering=${OrderingTypesEnum.ID}&direction=desc&page=${page}`;
    return this.httpService.axiosRef.get(queryString);
  }

  getOne(id) {
    const queryString = `${MediaTypesEnum.TV_SERIES}?id=${id}`;
    return this.httpService.axiosRef.get(queryString);
  }
}
