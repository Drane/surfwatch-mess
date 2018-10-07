import {property, model} from '@loopback/repository';

@model()
export class Location {
  @property({type: 'number', required: true})
  latitude: number;
  @property({type: 'number', required: true})
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
