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
  constructor(private _catsubcatservice:CategorySubCategoryService) { }


  ngOnInit() {

    this._catsubcatservice.GetCategorySubCategories().subscribe(data=>this.categorysubcategories=data) ;
  }

}
