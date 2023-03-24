import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
// constructor(private routes:Router,private dialog:MatDialogRef){}
public username: string;
public email: string;
public password:string;
public confirmPassword:string;
// showLogin:boolean;
constructor(private router:Router,private http:HttpClient,private metadialogref: MatDialogRef<SignupComponent>){
  this.username="";
  this.email="";
  this.password="";
  this.confirmPassword="";
  // this.showLogin=false;
}
signup(){
  let obj = {
    username : this.username,
    email: this.email,
    password: this.password,
    confirmPassword:this.confirmPassword
  }
  console.log("oj=>",obj);
  this.http.post("http://localhost:3300/signup",obj).subscribe(res=>{
   
      console.log(res);
      this.metadialogref.close()
  
    
   
})
}
edit(){
  
}
}
// this.router.navigate(['data']);
