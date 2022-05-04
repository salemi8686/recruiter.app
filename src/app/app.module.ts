import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyInterviewsComponent } from './my-interviews/my-interviews.component';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';
import { MyTemplatesComponent } from './my-templates/my-templates.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';
import { CommonModule } from '@angular/common';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    MyInterviewsComponent,
    InterviewDetailComponent,
    MyTemplatesComponent,
    TemplateDetailComponent,
    CreateTemplateComponent,
    CreateInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    ]),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
