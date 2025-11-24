import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  imports: [],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {

  openLiveDemo(url: string): void {
    window.open(url, '_blank'); // real-time demo in new tab
  }
}
