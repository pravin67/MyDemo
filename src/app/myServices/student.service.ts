import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Create an instance of EventEmitter
  addStudent = new EventEmitter<string>();

  constructor() { }

  // Method to emit an event
  addStudentEventEmit(value: string): void {
    this.addStudent.emit(value);
  }
}
