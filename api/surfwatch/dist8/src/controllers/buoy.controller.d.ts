import { Buoy } from '../models/buoy.model';
import { BuoyRepository } from '../repositories/buoy.repository';
export declare class BouyController {
    protected buoyRepo: BuoyRepository;
    constructor(buoyRepo: BuoyRepository);
    findById(placeName: string): Promise<Buoy>;
}
