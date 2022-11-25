import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {MediaTypesEnum, OrderingTypesEnum} from "../../Types/RequestParams";

@Injectable()
export class SearchService {
    mediaTypesArray: MediaTypesEnum[];

    constructor(private readonly httpService: HttpService) {
        this.mediaTypesArray = [
            MediaTypesEnum.MOVIES,
            MediaTypesEnum.TV_SERIES,
            MediaTypesEnum.ANIME,
            MediaTypesEnum.ANIME_TV_SERIES,
            MediaTypesEnum.SHOW_TV_SERIES
        ];
    }

    //TODO Переписать это говнище
    async findSearch(query) {
        const foundContent = [];

        for (const type of this.mediaTypesArray) {
            const queryString = `${type}?ordering=${OrderingTypesEnum.RELEASED}&direction=desc&query=${query}&field=title`;
            const { data } = await this.httpService.axiosRef.get(queryString);

            if (data.data) {
                for (const item of data.data) {
                    foundContent.push(item);
                }
            }
        }

        return foundContent;
    }
}
