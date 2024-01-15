import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  username:string="";
  email:string="";
  password:string="";
  confirm_password:string="";

  showDetails(){
    
    if(this.password==this.confirm_password){

      console.log(this.username+" "+this.email+" "+this.password+" "+this.confirm_password)
    }
    else{
      console.log("Incorrect Password...")
    }
  }

}
