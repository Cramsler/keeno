import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class KpService {
    constructor(private readonly httpService: HttpService) {}

    getFullInfo(kpId) {
        return this.httpService.axiosRef.get(`films/${kpId}`);
    }

    getTrailer(kpId) {
        return this.httpService.axiosRef.get(`films/${kpId}/videos`);
    }
}