import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../myServices/student.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  constructor(
    public studentService: StudentService
  ){

  }

  ngOnInit(): void{

  }

  onRegisterClick(){
    this.studentService.addStudentEventEmit('Register Now');
  }
  
}
