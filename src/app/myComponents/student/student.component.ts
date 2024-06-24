import { Component, Input, output, OnInit, Output, EventEmitter } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser'; // For root module
import { CommonModule } from '@angular/common'; // For feature modules

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})

export class StudentComponent implements OnInit {
  @Input() student: any = null;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  constructor(){

  }

  ngOnInit(): void{

  }

  onEditClick(student:any){
    this.onEdit.emit(student);
  }

  onDeleteClick(student:any){
    this.onDelete.emit(student);
  }

}
