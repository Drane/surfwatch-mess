import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { inject } from '@loopback/core';
import { Buoy } from '../models';

export class BuoyRepository extends DefaultCrudRepository<Buoy, typeof Buoy.prototype.placeName> {
  constructor(@inject('datasources.db') protected datasource: juggler.DataSource) {
    super(Buoy, datasource);
  }
}
