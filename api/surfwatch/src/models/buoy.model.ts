import {model, property, Entity, hasMany} from '@loopback/repository';
import {Location} from './location.model';
import { Measurement } from './measurement.model';

@model()
export class Buoy extends Entity {

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    // id: true,
  })
  placeName?: string;

  @hasMany(() => Measurement, {keyTo: 'buoyId'})
  measurements: Measurement[];
  
  // @property({required: true, id: true})
  // placeName: string;
  @property({required: false})
  location: Location;

  @property({type: 'string', required: false})
  description?: string;

  // constructor(placeName: string, latitude: number, longitude: number) {
  //   super();
  //   this.placeName = placeName;
  //   this.location = new Location(latitude, longitude);
  // }

  // getId() {
  //   return this.id;
  // }

  constructor(data?: Partial<Buoy>) {
    super(data);
  }

}
