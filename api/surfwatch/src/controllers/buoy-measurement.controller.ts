import {get, param} from '@loopback/rest';
import {Buoy} from '../models/buoy.model';
import {BuoyRepository, MeasurementRepository} from '../repositories';
import {repository, Filter} from '@loopback/repository';
import { Measurement } from '../models';

export class MeasurementController {
  // constructor(@repository(MeasurementRepository) protected measurementRepo: MeasurementRepository) {}
  constructor(@repository(BuoyRepository) protected buoyRepo: BuoyRepository) {}

  @get('/buoy/{id}/measurements')
  async find(
    @param.path.number('id') id: number, 
    @param.query.string('filter') filter?: Filter
  ): Promise<Measurement[]> {

    return await this.buoyRepo.measurements(id).find(filter);
  }
}
