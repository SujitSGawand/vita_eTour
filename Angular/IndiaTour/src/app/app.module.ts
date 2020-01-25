import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySubCategoryComponent } from './category-sub-category/category-sub-category.component';
import { HttpClientModule } from '@angular/common/http';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { PackageCompleteDetailsComponent } from './package-complete-details/package-complete-details.component';
import { PackageListComponent } from './package-list/package-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    CategorySubCategoryComponent,
    SubcategoryComponent,
    PackageCompleteDetailsComponent,
    PackageListComponent,
    RegistrationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
