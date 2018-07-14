import {model, property, Entity} from '@loopback/repository';
import {Location} from './location.model';

@model()
export class Buoy extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  placeName?: string;
  // @property({required: true, id: true})
  // placeName: string;
  @property({required: false})
  location: Location;
  @property({required: false})
  desc?: string;

    // constructor(placeName: string, latitude: number, longitude: number) {
    //   super();
    //   this.placeName = placeName;
    //   this.location = new Location(latitude, longitude);
    // }

  getId() {
    return this.placeName;
  }
}
