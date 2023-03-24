import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DialougeComponent } from './dialouge/dialouge.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:'data',
    component:DataComponent
  },
  {
    path:'dialouge',
    component:DialougeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
