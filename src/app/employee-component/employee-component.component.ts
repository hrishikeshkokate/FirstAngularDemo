import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-component.component.html',
  styleUrl: './employee-component.component.css'
})
export class EmployeeComponentComponent {

  empid:number=0;
  name:string="";
  city:string="";

  addEmployee()
  {
    console.log(this.empid+" "+this.name+" "+this.city)
  }

}
