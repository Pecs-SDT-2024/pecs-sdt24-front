import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import {AuthGuard} from "./services/auth.guard";


export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'posts/:id', component: PostComponent, canActivate: [AuthGuard]},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'write-post', component: CreatePostComponent, canActivate: [AuthGuard]},
  { path: 'login-register', component: LoginRegisterComponent },
  { path: '**', redirectTo: '' } // Redirect unknown paths to home or login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
