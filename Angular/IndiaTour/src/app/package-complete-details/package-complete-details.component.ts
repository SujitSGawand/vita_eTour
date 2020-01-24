import { Component, OnInit } from '@angular/core';
import { ICategorySubCategory } from '../i-category-sub-category';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { Router } from '@angular/router';
import { IItineraryPCD } from '../iitinerary-pcd';
import { IPackageList } from '../ipackage-list';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-package-complete-details',
  templateUrl: './package-complete-details.component.html',
  styleUrls: ['./package-complete-details.component.css']
})
export class PackageCompleteDetailsComponent implements OnInit {
  packageList:IPackageList[];
  Ipcdays:IItineraryPCD[];
  a:IItineraryPCD;
  srnum:number=1;
  id:number=parseInt(localStorage.getItem('catsubid'));
  packid:number=parseInt(localStorage.getItem('packid'));
  datepackid:number=parseInt(localStorage.getItem('datepackid'));
 // CompletePack:IPackageList[]=JSON.parse(localStorage.getItem("CompletePack"));
  
  constructor(private _catsubcatservice:CategorySubCategoryService,private router:Router) { }

  onSubmit(bookingdatesubmit:FormGroup)
  {
    alert(bookingdatesubmit.value);
  }
  
  
  ngOnInit() {
    
    this._catsubcatservice.GetItineraryPCD(this.packid,this.datepackid).subscribe(data=>{this.Ipcdays=data;
      this.a=this.Ipcdays[0];}) ;
      this._catsubcatservice.GetPackageList(this.id).subscribe(data=>{this.packageList=data;
      });
  }

}
