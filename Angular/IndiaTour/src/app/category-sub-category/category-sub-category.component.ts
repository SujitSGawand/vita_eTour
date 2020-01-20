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
  icat1Disp(categorysubcategories:ICategorySubCategory[]) : ICategorySubCategory[]
  {
    let b:ICategorySubCategory[];
    categorysubcategories.forEach(element => {
      var i;
      if(element.categoryname!=null)
      {
        for (i=0;i<=b.length;i++)
          b[i] = element;
      }
      }    
    );
    return b;
  }
 
  ngOnInit() {
    
    this._catsubcatservice.GetCategorySubCategories().subscribe(data=>this.categorysubcategories=data) ;
    this.a=this.icat1Disp(this.categorysubcategories);
  }

}
