import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { StudentListComponent } from './myComponents/student-list/student-list.component';
import { FooterComponent } from './myComponents/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, StudentListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyDemoAPP';
}
