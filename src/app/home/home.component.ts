import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 data = [
{ 
  "_id" : "61646be504a00d36c81148f6", 
  "empid" : "123", 
  "empfirstname" : "komali", 
  "emplastname" : "pyla", 
  "empdob" : ("1995-10-16T21:54:00.000+0000"), 
  "empjoining" : ("2021-10-17T21:54:00.000+0000"), 
  
},
{ 
  "_id" : "21646be504a00d36c81148f6", 
  "empid" : "123", 
  "empfirstname" : "raj", 
  "emplastname" : "pyla", 
  "empdob" : ("1995-10-16T21:54:00.000+0000"), 
  "empjoining" : ("2021-10-17T21:54:00.000+0000"), 
  
},
{ 
  "_id" : "61646be504a00d36c81148f6", 
  "empid" : "123", 
  "empfirstname" : "kavya", 
  "emplastname" : "pyla", 
  "empdob" : ("1995-10-16T21:54:00.000+0000"), 
  "empjoining" : ("2021-10-17T21:54:00.000+0000"), 
  
},
{ 
  "_id" : "31646be504a00d36c81148f6", 
  "empid" : "123", 
  "empfirstname" : "komali", 
  "emplastname" : "pyla", 
  "empdob" : ("1995-10-16T21:54:00.000+0000"), 
  "empjoining" : ("2021-10-17T21:54:00.000+0000"), 
  
},
{ 
  "_id" : "41646be504a00d36c81148f6", 
  "empid" : "123", 
  "empfirstname" : "chinni", 
  "emplastname" : "pyla", 
  "empdob" : ("1995-10-16T21:54:00.000+0000"), 
  "empjoining" : ("2021-10-17T21:54:00.000+0000"), 
  
}

]
  constructor() { }

  ngOnInit(): void {
  }

}
