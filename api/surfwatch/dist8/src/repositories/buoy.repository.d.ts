import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Buoy } from '../models';
export declare class BuoyRepository extends DefaultCrudRepository<Buoy, typeof Buoy.prototype.placeName> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
