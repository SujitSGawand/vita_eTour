import { ICategorySubCategory } from './i-category-sub-category';

export class CategorySubCategory implements ICategorySubCategory {
    constructor(
        public catsubid :number,
        public categoryid :number,
        public categoryname :string,
        public categoryimage :string,
        public subcategoryid:number,
        public subcategoryname :string,
        public subcategoryimage:string,
        public eofflag :string)
        {}
}
