import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page-component/home-page-component';
import { ContactComponent } from './contact-component/contact-component';
import { CoursesComponent } from './courses-component/courses-component';
import { ProjectsComponent } from './projects-component/projects-component';
import { BlogComponent } from './blog-component/blog-component';
import { LoginComponent } from './login-component/login-component';
import { SignupComponent } from './signup-component/signup-component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: '**', redirectTo: '' },
];
