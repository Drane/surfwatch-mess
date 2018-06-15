import { Entity } from '@loopback/repository';
import { Location } from './location.model';
export declare class Buoy extends Entity {
    placeName?: string;
    location: Location;
    desc?: string;
    getId(): string | undefined;
}
