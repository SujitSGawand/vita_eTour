import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { IPackageList } from '../ipackage-list';

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

  ngOnInit() {
    alert(this.catsubid);
    this._catsubcatservice.GetPackageList(this.catsubid).subscribe(data=>{this.packageList=data;
      this.a=this.packageList });
  }

}
