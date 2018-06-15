import { property, model } from "@loopback/repository";

@model()
export class Location {
    @property({required: true}) latitude: number;
    @property({required: true}) longitude: number;

    constructor(latitude: number, longitude: number){
        this.latitude = latitude;
        this.longitude = longitude;
    }

}