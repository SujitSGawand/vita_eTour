import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { IPackageList } from '../ipackage-list';
import { isDifferent } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  packageList:IPackageList[];
  catsubid:number=parseInt(localStorage.getItem('catsubid'));
  a:IPackageList[];
  constructor(private _catsubcatservice:CategorySubCategoryService,private router:Router) { }
  
  Itinerarydisp(packageList)
  {
    alert(packageList);
    localStorage.setItem("packid",packageList.packageid);
    localStorage.setItem("datepackid",packageList.datepackageid);
    this.router.navigate(["/packagedetails"]);
  }
  
  
  ngOnInit() {
    alert(this.catsubid);
    
    this._catsubcatservice.GetPackageList(this.catsubid).subscribe(data=>{this.packageList=data;
       });
  }

}
