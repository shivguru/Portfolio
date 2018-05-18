import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SafeHtmlPipe } from './safe-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    SafeHtmlPipe
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
