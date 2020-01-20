import { Component, OnInit } from '@angular/core';
import { ICategorySubCategory } from '../i-category-sub-category';
import { CategorySubCategoryService } from '../category-sub-category.service';

@Component({
  selector: 'app-category-sub-category',
  templateUrl: './category-sub-category.component.html',
  styleUrls: ['./category-sub-category.component.css']
})
export class CategorySubCategoryComponent implements OnInit {

  categorysubcategories:ICategorySubCategory[];
  a:ICategorySubCategory[];

  constructor(private _catsubcatservice:CategorySubCategoryService) { }
  icat1Disp(categorysubcategories:ICategorySubCategory[]) : any
  {
    console.log(categorysubcategories);
     let x= categorysubcategories.filter(element  => element.subcategoryid==null);
     console.log(x);
    return x;
  }
 
  ngOnInit() {
    
    this._catsubcatservice.GetCategorySubCategories().subscribe(data=>{      this.categorysubcategories=data;
      this.a=this.icat1Disp(this.categorysubcategories);
      console.log(this.a)}) ;
    }

}
