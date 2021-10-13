import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 name: any;
 password:any ;
  constructor(public authservice : AuthService,public router: Router ) { }

  ngOnInit(): void {
  }
loginUser(){
  // const data = 
  // {
  //    "email": this.name,
  //    "password": this.password
  // }
  // this.authservice.userLogin(data).subscribe(res=>{
  //   console.log(res);
  // })
  this.router.navigateByUrl('/Home');
}

}
