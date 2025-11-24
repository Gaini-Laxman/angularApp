import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses-component.html',
  styleUrls: ['./courses-component.scss'],
})
export class CoursesComponent {
  activeCourse: string | null = null;

  openCourse(courseName: string) {
    this.activeCourse = courseName;
  }

  closeCourse() {
    this.activeCourse = null;
  }
}
