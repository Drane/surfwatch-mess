import {DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {inject, Getter} from '@loopback/core';
import {Buoy} from '../models';
import { Measurement } from '../models/measurement.model';
import { MeasurementRepository } from './measurement.repository';

export class BuoyRepository extends DefaultCrudRepository<
  Buoy,
  typeof Buoy.prototype.id
> {

  public readonly measurements: HasManyRepositoryFactory<Measurement, typeof Buoy.prototype.id>;

  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
    @repository.getter(MeasurementRepository)
    getMeasurementRepository: Getter<MeasurementRepository>
  ) {
    super(Buoy, datasource);

    this.measurements = this._createHasManyRepositoryFactoryFor('measurements', getMeasurementRepository);
  }

  public findByPlaceName(placeName: string){
    return this.findOne({where: {placeName}});
  }

}
