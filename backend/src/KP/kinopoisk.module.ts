import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {KpController} from "./Controllers/kp.controller";
import {KpService} from "./Services/kp.service";
import {HttpModule} from "@nestjs/axios";


@Module({
    imports: [
        ConfigModule.forRoot(),
        HttpModule.register({
            baseURL: process.env.KP_BASE_URL,
            headers: <any>{
                "X-API-KEY": process.env.KP_API_KEY,
                "Content-Type": 'application/json'
            }
        })
    ],
    controllers: [KpController],
    providers: [KpService]
})
export class KinopoiskModule {}
