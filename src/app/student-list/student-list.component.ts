import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  @Input() email:string="";
  @Output() passDetail=new EventEmitter<string>();


  studentList: IStudent[] = [
    { studId: 11, studName: 'Anuj', studMarks: 95 },
    { studId: 12, studName: 'Vishal', studMarks: 88 },
    { studId: 13, studName: 'Suraj', studMarks: 76 },
    { studId: 14, studName: 'Hrishikesh', studMarks: 89 },
  ];

  sendLetter(){
    this.passDetail.emit("hii from child to parent(student)")
  }
}

export interface IStudent {
  studId: number;
  studName: string;
  studMarks: number;
}