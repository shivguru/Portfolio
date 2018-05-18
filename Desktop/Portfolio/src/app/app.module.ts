import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatListModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    SafeHtmlPipe,
    EducationComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
