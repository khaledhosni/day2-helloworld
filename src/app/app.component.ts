import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee, EmployeeCardComponent } from "./employee-card/employee-card.component";
import { NgFor, NgIf } from '@angular/common';
import { SharedDataService } from './service/shared-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeCardComponent,NgFor,NgIf],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'day2-helloworld';
  date=new Date(); 

  isVisible=true;



  employees:Employee[]=[
  {
    id:1001,
    name:'John Doe',
    email:'john.doe@example.com',
    phone:'123-456-7890'
  },

  {
    id:1001,
    name:'John Doe 1',
    email:'john.doe@example.com',
    phone:'123-456-7890'
  },

  {
    id:1001,
    name:'John Doe 2',
    email:'john.doe@example.com',
    phone:'123-456-7890'
  },
  {
    id:1001,
    name:'John Doe 3',
    email:'john.doe@example.com',
    phone:'123-456-7890'
  },
  ];


  selectedEmployee:Employee={
    id:0,
    name:'',
    email:'',
    phone:''
  }

  constructor(public sharedData:SharedDataService){



    setInterval(()=>{
      this.date=new Date();
    },1000);
  }
 

  handleClick(){
    this.date=new Date();

    console.log(this.sharedData.selectedEmployee.name);
  }
  

  toggleVisibility(){
    this.isVisible=!this.isVisible;
  }

}
