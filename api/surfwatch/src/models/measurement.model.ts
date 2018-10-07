import {property, model, Entity, belongsTo} from '@loopback/repository';
import { Buoy } from './buoy.model';

@model()
export class Measurement extends Entity{

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({type: 'date', required: true})
  dateTime: Date;

  @property({type: 'number', required: true})
  peakFrequency: number;
  
  @belongsTo(() => Buoy)
  buoyId: number;
  
  getId() {
    return this.id;
  }

  constructor(data?: Partial<Measurement>) {
    super(data);
  }

}
