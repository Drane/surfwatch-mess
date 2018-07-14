import {get, param} from '@loopback/rest';
import {Buoy} from '../models/buoy.model';
import {BuoyRepository} from '../repositories/buoy.repository';
import {repository} from '@loopback/repository';

export class BouyController {
  constructor(@repository(BuoyRepository) protected buoyRepo: BuoyRepository) {}

  @get('/buoy')
  find(): Promise<Buoy[]> {
    return this.buoyRepo.find();
  }

  @get('/buoy/{placeName}')
  findById(@param.path.string('placeName') placeName: string): Promise<Buoy> {
    return this.buoyRepo.findById(placeName);
    // return new Promise((resolve, reject) => resolve(new Buoy()));
  }
}
