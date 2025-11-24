import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { FooterComponent } from './footer-component/footer-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Navbar, FooterComponent],
  template: `
    <header class="jfg-header-wrapper">
      <app-header></app-header>
      <app-navbar></app-navbar>
    </header>
    <main class="page-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.scss'],
})
export class App {}
