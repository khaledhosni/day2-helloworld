import { Component, Input, input } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';

export interface Employee{
  id:number;
  name:string;
  email:string;
  phone:string;
}

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {


  constructor(public sharedData:SharedDataService){

  }

  @Input() 
  employee:Employee={
    id:0,
    name:'',
    email:'',
    phone:''
  };

  // @Input() 
  // setSelected(): void {

  // }


   handleClick(){
    console.log('Clicked on employee'+ this.employee.name);
    this.sharedData.selectedEmployee=this.employee;
   }

}
