import {Controller, Get, Query} from '@nestjs/common';
import {KpService} from "../Services/kp.service";
import {FilmDto} from "../Dto/film.dto";

@Controller("kp")
export class KpController {
    constructor(private readonly service: KpService) {}

    @Get()
    async getOne(@Query("kpId") kpId): Promise<FilmDto> {
        const response = await this.service.getFullInfo(kpId);
        return response.data;
    }

    @Get("trailer")
    async getTrailer(@Query("kpId") kpId) {
        const response = await this.service.getTrailer(kpId);
        return response.data;
    }

}
