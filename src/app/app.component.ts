import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HighlightDirective } from './highlight.directive';
import { MyMathPipe } from './my-math.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    EmployeeListComponent,
    StudentListComponent,
    EmployeeComponentComponent,
    RegistrationComponent,
    LoginComponent,
    HighlightDirective,MyMathPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAngularDemo';

  info:string="HII FROM PARENT";

  message:string="First Angular Project";

  letter:string="Hi from student parent";

  day:string="Monday";

  currentDate=new Date();

  num:number=554896;

  
 childMsg:string='';
 readMessage(msg:string){
   this.childMsg=msg;
 }

 childLetter:string='';
sendLetter(email:string){
   this.childLetter=email;
 }


  city:string="pune";
  isdisabled:boolean=true;

  displayMsg(){
    let res=confirm("do you want to make payment");
    if(res==true)
    {
      alert('Payment done.... :) :)')
    }
    else{
      alert('payment failed... :(  :(')
    }
  }

  addcolour(){

    let colour={
      'background-color':'blue',
       'color':'black',
       'font-size':'32px'

      
    }
    return colour;

  }

  isSuccess:boolean=false;
  isError:boolean=false;
  isWarning:boolean=false;
  msg:string="";

  success(){
    this.isSuccess=true;
    this.isError=false;
    this.isWarning=false;
    this.msg="Successfull..."
  }

  error(){
    this.isSuccess=false;
    this.isError=true;
    this.isWarning=false;
    this.msg="Error..."

  }

  warning(){
    this.isSuccess=false;
    this.isError=false;
    this.isWarning=true;
    this.msg="Warning..."

  }


}
