import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgwWowModule} from 'ngx-wow';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NavBarComponent } from './components/bars/nav-bar/nav-bar.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    ContactComponent,
    NavBarComponent
  ],
  imports: [
    MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    MatCardModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
