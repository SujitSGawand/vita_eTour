import { IPackageList } from './ipackage-list';

export class PackageList implements IPackageList {
    constructor(
        public packageid:number,
        public tourname:string,
        public tourimage:string,
        public tourcost:number,
        public startdate:Date,
        public enddate:Date,
        public datepackageid:number,
    ){}

}
