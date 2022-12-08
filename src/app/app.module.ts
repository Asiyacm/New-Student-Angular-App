import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { ViewStudentComponent } from './view-student/view-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const myRoute:Routes=[
  {
    path: "",
    component:AddStudentComponent
  },
  {
    path:"view",
    component:ViewStudentComponent
  },
  {
    path:"search",
    component:SearchStudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentComponent,
    SearchStudentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
