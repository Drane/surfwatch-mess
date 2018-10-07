import {DefaultCrudRepository, juggler, BelongsToAccessor, repository} from '@loopback/repository';
import {inject, Getter} from '@loopback/core';
import {Measurement, Buoy} from '../models';
import { BuoyRepository } from './buoy.repository';

export class MeasurementRepository extends DefaultCrudRepository<
  Measurement,
  typeof Measurement.prototype.id
> {

  public readonly buoy: BelongsToAccessor<
    Buoy,
    typeof Measurement.prototype.id
  >;

  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
    @repository.getter('BuoyRepository')
    protected buoyRepositoryGetter: Getter<BuoyRepository>
  ) {
    super(Measurement, datasource);

    this.buoy = this._createBelongsToAccessorFor('buoyId', buoyRepositoryGetter);
  }
}
