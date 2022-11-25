import {Controller, Get, Param, Query} from '@nestjs/common';
import {SeriesService} from '../Services/series.service';

@Controller("series")
export class SeriesController {
    constructor(private readonly service: SeriesService) {}

    @Get()
    async getAll(@Query("page") page) {
        const {data} = await this.service.getAll(page);
        return data;
    }

    @Get(":id")
    async getOne(@Param() params) {
        const {data} = await this.service.getOne(params.id);
        return data;
    }
}
