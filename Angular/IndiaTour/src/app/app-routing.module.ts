import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorySubCategoryComponent } from './category-sub-category/category-sub-category.component';

const routes: Routes = [
  {path:'home',component:CategorySubCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
