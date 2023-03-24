import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, } from '@angular/common/http';
import { SignupComponent } from '../signup/signup.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialougeComponent } from '../dialouge/dialouge.component';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  users:any
  redata:any
  constructor(private router:Router,private http:HttpClient,private MatDig:MatDialog,){
  }
  showdata(){
    this.http.get("http://localhost:3300/dbdata").subscribe(res=>{
this.users = res
      console.log("response=>", res);
      
    })}
adddata(){
  let dialogRef = this.MatDig.open(SignupComponent, {
  height: '400px',
  width: '600px',
}

);
}
edit(user : any){
  let dialogRef = this.MatDig.open(DialougeComponent, {
    height: '400px',
    width: '600px',
    data:user
  }
  
  
  );}
  delete(data:any){
    this.redata = data
    console.log(this.redata);
    this.http
      .delete(`http://localhost:3300/deleteData/${this.redata._id}`)
      .subscribe((response) => {

        console.log(`Update response: ${response}`,
        this.showdata());
        
        // this.dialogRef.close();
      });
  }
}

