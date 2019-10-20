import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutMeComponent} from './components/pages/about-me/about-me.component';
import {ExperienceComponent} from './components/pages/experience/experience.component';
import {ContactComponent} from './components/pages/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Welcome To My Portfolio', animation: 'Home'}},
  {path: 'about-me', component: AboutMeComponent, data: {title: 'About Me', animation: 'About'}},
  {path: 'experience', component: ExperienceComponent, data: {title: 'Experience & Projects', animation: 'Experience'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact Me', animation: 'Contact'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
