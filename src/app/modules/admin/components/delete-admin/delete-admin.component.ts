import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../../../services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.scss']
})
export class DeleteAdminComponent implements OnInit {

  deleteForm=new FormGroup({
    fullName:new FormControl(null),
    email:new FormControl(null),
    dob:new FormControl(null),
    address:new FormControl(null),
    contact:new FormControl(null),
    nic:new FormControl(null)
  })

  constructor(private adminService:AdminService , private snackBar:MatSnackBar , private router:Router) { }

  ngOnInit(): void {
  }

  getAdmin(email:string) {
    this.adminService.getAdmin(email).subscribe(response=>{
      console.log(response);
      this.deleteForm.patchValue({
        fullName:response.message.fullName,
        dob:response.message.dob,
        address:response.message.address,
        contact:response.message.contact,
        nic:response.message.nic
      })
    }, error => {
      console.log(error);
      if(error.status==404){
        this.snackBar.open('Admin Not Found' , 'Close' , {duration:3500});
      }
    })
  }

  delete(email:string) {
    this.adminService.delete(email).subscribe(response=>{
      console.log(response);
      this.snackBar.open('Successfully deleted !' , 'Close' , {duration:7500});
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['admin'])
  }
}
