import { Injectable } from '@angular/core';
import { Employee } from '../employee-card/employee-card.component';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  
  selectedEmployee:Employee={
    id:0,
    name:'',
    email:'',
    phone:''
  };

}
