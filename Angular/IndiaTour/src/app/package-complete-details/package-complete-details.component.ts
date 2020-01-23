import { Component, OnInit } from '@angular/core';
import { ICategorySubCategory } from '../i-category-sub-category';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { Router } from '@angular/router';
import { IItineraryPCD } from '../iitinerary-pcd';


@Component({
  selector: 'app-package-complete-details',
  templateUrl: './package-complete-details.component.html',
  styleUrls: ['./package-complete-details.component.css']
})
export class PackageCompleteDetailsComponent implements OnInit {

  Ipcdays:IItineraryPCD[];
  a:IItineraryPCD;
  id:Number=parseInt(localStorage.getItem('catsubid'));
  packid:number=parseInt(localStorage.getItem('packid'));
  datepackid:number=parseInt(localStorage.getItem('datepackid'));
  constructor(private _catsubcatservice:CategorySubCategoryService,private router:Router) { }

  
  
  ngOnInit() {
    alert(this.id);
    this._catsubcatservice.GetItineraryPCD(this.packid,this.datepackid).subscribe(data=>{this.Ipcdays=data;
      this.a=this.Ipcdays[0];}) ;
  }

}
