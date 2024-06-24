import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { AddUpdateStudentComponent } from '../add-update-student/add-update-student.component';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser'; // For root module
import { CommonModule } from '@angular/common'; // For feature modules
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../myServices/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentComponent, AddUpdateStudentComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  mode: any = "View"; //View, Add, Edit
  studentObj: any = null;
  localStudentList: any = null; 
  searchTerm: string = '';
  studentList: any = []; // { id: 1, salutation: "Mr.", F_Name: "Shiv", M_Name: "Pravin", L_Name: "Chavhan", image: "", email: "shiv0707@gmail.com", class: "SSC", address: "Pune", gender: "Male", active: true },
  eventSubscription: any;
  
  constructor(
    public studentService: StudentService
  ) {
    this.localStudentList = localStorage.getItem('studentList');
    if(this.localStudentList == null){
      this.studentList = [];
    } else {
      this.studentList = JSON.parse(this.localStudentList);
    }
  }

  ngOnInit(): void {
    this.eventSubscription = this.studentService.addStudent.subscribe(message => {
     if(message == 'Register Now'){
      this.addStudent();
     } else {
     }
    });
  }

  search(){
    if (!this.searchTerm) {
      this.studentList = JSON.parse(this.localStudentList);
    } else {
      this.studentList = this.studentList.filter((item:any) =>
        item.F_Name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }

  addStudent(){
    this.mode = 'Add';
    this.studentObj = {};
  }

  onEditHandler(student:any){
    this.mode = 'Edit';
    this.studentObj = student;
  }

  onDeleteHandler(student:any){
    const index = this.studentList.indexOf(student);
    this.studentList.splice(index, 1);
    localStorage.setItem("studentList", JSON.stringify(this.studentList));
  }

  onSaveHandler(student:any){
    if(this.mode == 'Add'){
      this.mode = 'View';
      this.studentList.push(student);
      localStorage.setItem("studentList", JSON.stringify(this.studentList));
    } else if(this.mode == 'Edit'){
      this.mode = 'View';
      const index = this.studentList.indexOf(student);
      this.studentList.splice(index, 1, student);
      localStorage.setItem("studentList", JSON.stringify(this.studentList));
    }
  }

  onCancelHandler(event:any){
    this.mode = 'View';
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
