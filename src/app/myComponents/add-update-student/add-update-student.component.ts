import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // For feature modules

@Component({
  selector: 'app-add-update-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-update-student.component.html',
  styleUrl: './add-update-student.component.css'
})
export class AddUpdateStudentComponent implements OnInit {
  @Input() studentObj: any = {};
  @Input() mode: any = 'Add'; //Add, Edit
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  salutations : any = [ 'Mr.', 'Ms.', 'Other'];
  genders: any = ['Male', 'Female', 'Other'];
  constructor() {
    if(this.mode == 'Add'){ // Set default values
      this.studentObj = {
        salutation: 'Mr.',
        F_Name: '',
        M_Name: '',
        L_Name: '',
        email: '',
        class: '',
        gender: 'Male',
        address: ''
      }
    } else {
    }
    
  }

  ngOnInit(): void {
  }

  onCancelClick(){
    this.studentObj = {};
    this.onCancel.emit();
  }

  onSaveClick(){
    this.onSave.emit(this.studentObj);
  }
}
