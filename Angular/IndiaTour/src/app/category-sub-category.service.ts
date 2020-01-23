import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { ICategorySubCategory } from './i-category-sub-category';
import { IPackageList } from './ipackage-list';

@Injectable({
  providedIn: 'root'
})
export class CategorySubCategoryService {
  url="http://localhost:50153/api/";
  constructor(private http: HttpClient){ }

  GetCategorySubCategories():Observable<ICategorySubCategory[]>{
    
    return this.http.get<ICategorySubCategory[]>(this.url+"CategorySubCategories");
  }

  GetPackageList(catsubid:number):Observable<IPackageList[]>{
    return this.http.get<IPackageList[]>(this.url+"PackageList/"+catsubid);
  }
}
