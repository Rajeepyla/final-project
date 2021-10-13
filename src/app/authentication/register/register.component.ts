import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  email: any;
  password:any ;
  constructor(public authservice : AuthService,public router:  Router ) { }
   ngOnInit(): void {
  }
  registerUser(){
    // const data=
    // {
    //   "name": this.name,
    //   "email": this.email,
    //   "password":this.password
    // }
    // this.authservice.userRegister(data).subscribe(res=>{
    //   console.log(res);
    // })
    this.router.navigateByUrl('/login');
  }
}
