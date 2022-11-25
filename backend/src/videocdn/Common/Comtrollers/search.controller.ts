import {Controller, Get, Query} from '@nestjs/common';
import {SearchService} from "../Services/search.service";

@Controller("search")
export class SearchController {
    constructor(private readonly service: SearchService) {}

    @Get()
    async getAll(@Query("query") query) {
        return this.service.findSearch(query);
    }
}
