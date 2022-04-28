import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyInterviewsComponent } from './my-interviews/my-interviews.component';
import { MyTemplatesComponent } from './my-templates/my-templates.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';

const routes: Routes = [
  {path: '',component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'interviews/my', component: MyInterviewsComponent},
  {path: 'interviews/my/:interviewId', component: InterviewDetailComponent},
  {path: 'interviews/templates/my', component: MyTemplatesComponent},
  {path: 'interviews/templates/my/create', component: CreateTemplateComponent},
  {path: 'interviews/templates/my/:templateId', component: TemplateDetailComponent},
  {path: 'interviews/create', component: CreateInterviewComponent},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
