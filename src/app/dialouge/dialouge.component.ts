import { HttpClient } from '@angular/common/http';
import { Component,Inject,Input } from '@angular/core';
// import { Inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataComponent } from '../data/data.component';

HttpClient
@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})
export class DialougeComponent {
  // formData: any = {};
  public email: string;
  public password: any;

  public data1: any;
public id:any

  constructor(private dialogRef: MatDialogRef<DialougeComponent>,private http:HttpClient,private routes:Router, @Inject(MAT_DIALOG_DATA) public data: DataComponent) {
    this.data1 = data;
    console.log("data===>",this.data1);
    this.email = this.data1.email;
    this.password=this.data1.password;
    this.id = this.data1._id
    console.log("data1===>",this.id)
  }

  onSubmit() {
    let formdata = {
      email : this.email,
      password:this.password

    }
    this.http
      .post(`http://localhost:3300/update/${this.id}`, formdata)
      .subscribe((response) => {
        console.log(`Update response: ${response}`);
        
        this.dialogRef.close();
      });
  }


}
// this.dialogRef.close(this.formData);
//   constructor(private dialogRef: MatDialogRef<DialougeComponent>) {}

