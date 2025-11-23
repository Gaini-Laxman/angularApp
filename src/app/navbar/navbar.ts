import { Component } from '@angular/core';
import { CommonModule, Location  } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  isMobileMenuOpen = false;
  constructor(private location: Location) {}
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Courses', route: '/courses' },
    { label: 'Projects', route: '/projects' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' },
  ];

  toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

   goBack(): void {
    this.location.back();
  }
}
