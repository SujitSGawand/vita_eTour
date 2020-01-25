import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorySubCategoryComponent } from './category-sub-category/category-sub-category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { PackageCompleteDetailsComponent } from './package-complete-details/package-complete-details.component';
import { PackageListComponent } from './package-list/package-list.component';
import { CustomerServiceService } from './customer-service.service';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [

  {path:'home',component:CategorySubCategoryComponent},
  {path:'subcat',component:SubcategoryComponent},
  {path:'packagedetails',component:PackageCompleteDetailsComponent},
  {path:'packagelist',component:PackageListComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'booking',component:BookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
