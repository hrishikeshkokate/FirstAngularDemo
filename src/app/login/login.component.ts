import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})
export class LoginComponent {

  Username1:string="";
  Password1:string="";

  viewDetail()
  {
    console.log(this.Username1+" "+this.Password1)
  }

}
