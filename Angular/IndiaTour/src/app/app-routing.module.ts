import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorySubCategoryComponent } from './category-sub-category/category-sub-category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';

const routes: Routes = [

  {path:'home',component:CategorySubCategoryComponent},
  {path:'subcat',component:SubcategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
