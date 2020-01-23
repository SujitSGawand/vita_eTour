import { Component, OnInit } from '@angular/core';
import { ICategorySubCategory } from '../i-category-sub-category';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  categorysubcategories:ICategorySubCategory[];
  a:ICategorySubCategory[];
  id:Number=parseInt(localStorage.getItem('catid'));
  
  constructor(private _catsubcatservice:CategorySubCategoryService,private router:Router) { }

  subcatDisp(a)
    {
     if(a.eofflag == 'Y')
     {
        alert("hello from subcategory");
        localStorage.setItem("catsubid",a.catsubid);
       this.router.navigate(["/packagelist"]);
     }
    }
  isubcatDisp(categorysubcategories:ICategorySubCategory[]) : any
  {
    console.log(categorysubcategories);
     let x= categorysubcategories.filter(element  => (element.categoryid == this.id) && (element.subcategoryid != null ));
     console.log(x);
    return x;
  }
  ngOnInit() {
    alert(this.id);
    this._catsubcatservice.GetCategorySubCategories().subscribe(data=>{this.categorysubcategories=data;
      this.a=this.isubcatDisp(this.categorysubcategories);
      console.log(this.a)}) ;
  }

}
