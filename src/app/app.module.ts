import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { DialougeComponent } from './dialouge/dialouge.component';
// import {MatDialogModule} from '@angular/material/dialog';


@NgModule({

  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    DataComponent,
    DialougeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatDialogModule,FormsModule,HttpClientModule,
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
