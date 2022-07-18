import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../../../services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {

  updateForm=new FormGroup({
    fullName:new FormControl(null),
    email:new FormControl(null),
    address:new FormControl(null),
    contact:new FormControl(null),
    nic:new FormControl(null)
  })

  constructor(private adminService:AdminService , private snackBar:MatSnackBar , private router:Router) { }

  ngOnInit(): void {
  }

  updateAdmin() {
    this.adminService.update(
      this.updateForm.get('fullName')?.value,
      this.updateForm.get('email')?.value,
      this.updateForm.get('dob')?.value,
      this.updateForm.get('address')?.value,
      this.updateForm.get('contact')?.value,
      this.updateForm.get('nic')?.value
    ).subscribe(response=>{
      console.log(response);
      this.snackBar.open('Successfully updated !' , 'Close' , {duration:7500});
    } , error => {
      console.log(error);
      this.snackBar.open('Something went wrong' , 'Close' , {duration:7500});
    })
  }

  loadData(email: string) {
    this.adminService.getAdmin(email).subscribe(response=>{
      console.log(response);
      this.updateForm.patchValue({
        fullName:response.message.fullName,
        email:response.message.email,
        dob:response.message.dob,
        address:response.message.address,
        contact:response.message.contact,
        nic:response.message.nic
      })
    } , error => {
      console.log(error);
      if(error.status==404){
        this.snackBar.open('Admin Not Found' , 'Close' , {duration:3500});
      }
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['admin'])
  }
}
