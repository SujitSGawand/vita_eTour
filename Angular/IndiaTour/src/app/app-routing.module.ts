import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorySubCategoryComponent } from './category-sub-category/category-sub-category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { PackageCompleteDetailsComponent } from './package-complete-details/package-complete-details.component';
import { PackageListComponent } from './package-list/package-list.component';

const routes: Routes = [

  {path:'home',component:CategorySubCategoryComponent},
  {path:'subcat',component:SubcategoryComponent},
  {path:'packagedetails',component:PackageCompleteDetailsComponent},
  {path:'packagelist',component:PackageListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
