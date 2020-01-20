import { Component, OnInit } from '@angular/core';
import { ICategorySubCategory } from '../i-category-sub-category';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-sub-category',
  templateUrl: './category-sub-category.component.html',
  styleUrls: ['./category-sub-category.component.css']
})
export class CategorySubCategoryComponent implements OnInit {

  categorysubcategories:ICategorySubCategory[];
  a:ICategorySubCategory[];

  //inside constructor router must be initilized
  constructor(private _catsubcatservice:CategorySubCategoryService,private router:Router) { }
  icat1Disp(categorysubcategories:ICategorySubCategory[]) : any
  {
    console.log(categorysubcategories);
     let x= categorysubcategories.filter(element  => element.subcategoryid==null);
     console.log(x);
     
    return x;
  }
   subcatDisp(a)
    {
      if(a.eofflag == 'N') //if n it will go to subcategory page
      {
        console.log(a);
        localStorage.setItem("catid",a.categoryid);
        this.router.navigate(["/subcat"]);//to load next component 
      }
      else if(a.eofflag == 'Y')//if yes it will go to packagedetail page
      {
        console.log(a.catsubid);
        alert("hello from cat CategorySubcategory")
        localStorage.setItem("catsubid",a.catsubid);
        this.router.navigate(["/packagedetails"]);
      }
    }
 
  ngOnInit() {
    
    this._catsubcatservice.GetCategorySubCategories().subscribe(data=>{      this.categorysubcategories=data;
      this.a=this.icat1Disp(this.categorysubcategories);
      console.log(this.a)}) ;
    }

}
