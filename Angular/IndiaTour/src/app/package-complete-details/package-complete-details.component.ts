import { Component, OnInit } from '@angular/core';
import { ICategorySubCategory } from '../i-category-sub-category';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-package-complete-details',
  templateUrl: './package-complete-details.component.html',
  styleUrls: ['./package-complete-details.component.css']
})
export class PackageCompleteDetailsComponent implements OnInit {

  categorysubcategories:ICategorySubCategory[];
  a:ICategorySubCategory[];
  id:Number=parseInt(localStorage.getItem('catsubid'));

  constructor(private _catsubcatservice:CategorySubCategoryService,private router:Router) { }

  
  iPacCompDetDisp(categorysubcategories:ICategorySubCategory[]) : any
  {
    // console.log(categorysubcategories);
    //  let x= categorysubcategories.filter(element  => element.catsubid==this.id);
    //  console.log(x);
     alert("Hello from Packet complete details")
    //return x;
  }
  ngOnInit() {
    alert(this.id);
    this._catsubcatservice.GetCategorySubCategories().subscribe(data=>{this.categorysubcategories=data;
      this.a=this.iPacCompDetDisp(this.categorysubcategories);
      console.log(this.a)}) ;
  }

}
