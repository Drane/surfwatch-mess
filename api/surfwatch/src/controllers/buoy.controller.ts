import {get, param} from '@loopback/rest';
import {Buoy} from '../models/buoy.model';
import {BuoyRepository} from '../repositories';
import {repository} from '@loopback/repository';

export class BuoyController {
  constructor(@repository(BuoyRepository) protected buoyRepo: BuoyRepository) {}

  @get('/buoy')
  find(): Promise<Buoy[]> {
    return this.buoyRepo.find();
  }

  @get('/buoy/{id}')
  findById(@param.path.string('id') id: number): Promise<Buoy> {
    return this.buoyRepo.findById(id);
    // return new Promise((resolve, reject) => resolve(new Buoy()));
  }
}
