import { IItineraryPCD } from './iitinerary-pcd';

export class ItineraryPCD implements IItineraryPCD {
    constructor(
        public packageid: number,
        public datepackageid: number,
        public tourname: string,
        public tourimage: string,
        public description: string,
        public startdate: Date,
        public enddate: Date,
        public dayid: number,
        public daywisedescription: string,
        public location: string,
        public tourcost: number,
    ) { }
}
