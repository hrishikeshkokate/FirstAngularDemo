import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  

  @Input() msg:string='';
  @Output() passValue=new EventEmitter<string>();

  employeeList:IEmployee[]=[
    {empid:101,name:"Kailash",city:"Pune"},
    {empid:102,name:"Suraj",city:"Sangli"},
    {empid:103,name:"Vishal",city:"Solapur"},
  ];

  sendMessage(){
    this.passValue.emit("HII FROM CHILD")
  }
}

export interface IEmployee{

  empid:number;
  name:string;
  city:string;
}
