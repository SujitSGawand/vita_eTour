import { Component, OnInit } from '@angular/core';
import { ICategorySubCategory } from '../i-category-sub-category';
import { CategorySubCategoryService } from '../category-sub-category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IItineraryPCD } from '../iitinerary-pcd';
import { IPackageList } from '../ipackage-list';
import { FormGroup , NgForm, FormControl } from '@angular/forms';


@Component({
  selector: 'app-package-complete-details',
  templateUrl: './package-complete-details.component.html',
  styleUrls: ['./package-complete-details.component.css']
})
export class PackageCompleteDetailsComponent implements OnInit {
  
  packageList:IPackageList[];
  Ipcdays:IItineraryPCD[];
  a:IItineraryPCD;
  
  id:number=parseInt(localStorage.getItem('catsubid'));
  packid:number=parseInt(localStorage.getItem('packid'));
  datepackid:number=parseInt(localStorage.getItem('datepackid'));
 
  
  constructor(private _catsubcatservice:CategorySubCategoryService, private activer: ActivatedRoute,private router:Router) { }

  bookForm = new FormGroup({ date : new FormControl()});
  bookNow()
  {
    let dateid:any = this.bookForm.get('date').value;
    localStorage.setItem("dateid",dateid);
    alert(dateid);
    this.router.navigate(["/registration"]);
  }
  

  ngOnInit() {
    
    this._catsubcatservice.GetItineraryPCD(this.packid,this.datepackid).subscribe(data=>{this.Ipcdays=data;
      this.a=this.Ipcdays[0];}) ;
      this._catsubcatservice.GetPackageList(this.id).subscribe(data=>{this.packageList=data;
      });
  }
}
