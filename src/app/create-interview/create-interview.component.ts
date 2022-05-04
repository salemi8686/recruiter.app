//import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewService } from '../interview.service';

import { Interview, interviews, templates,Subject, subjects, Template, SubjectIn, subjectIns} from '../modlues';
import { SubjectService } from '../subject.service';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.css']
})
export class CreateInterviewComponent implements OnInit {

  num_sub=0;
  candidate_name:string = '';
  level='Select a grade';
  levels = ['Select a grade','junior','middle','senior'];
  sel_option='Select a template';
  queues = [0,1,2,3,4,5];
  new_str:string = '';
  grades = ['not checked','junior','middle','senior'];
  gr_option = 'not checked';
  comment = '';
  template_titles = ['Select a grade'];
  template : any;
  //subjectIn: any;
  add_clicked:number = 0;
  interview: Interview = {
    id: 0,
    candidate_name: "John Smith",
    level: "senior",
    sub_size: 1,
    subjects: [{
      id: 1,
      name: '',
      grade: '',
      description: [],
      feedback: '',
    },
    {
      id: 2,
      name: '',
      grade: '',
      description: [],
      feedback: '',
    }],
  }
  subjectIn: SubjectIn = {
    id: 1,
    name: '',
    grade: '',
    description: [],
    feedback: '',
    interview: 1,
  }
  templates: any;
  back_templates: Template[] = []
  back_template: any;
  constructor(private router: Router,private templateService: TemplateService,private interviewService: InterviewService,private subjectService: SubjectService) { }

  ngOnInit(): void {
    // for(let template of templates){
    //      this.template_titles.push(template.title)
    // }
    this.getTemplates();
  }
  getTemplates(){
    this.templateService.getTemplates().subscribe((data)=>{
          console.log(data);
          this.back_templates = data;
          for(let template of this.back_templates){
            this.template_titles.push(template.title)
       }
  });
  }

  getTemplate(id:number){
    this.templateService.getTemplate(id).subscribe((data)=>{
          this.back_template = data;
          console.log(data);
          console.log(this.back_template);

    });
  }

  addSubject(subject: SubjectIn){
    this.subjectService.addSubject(subject).subscribe((subject =>subjectIns.push(subject)));
  }
  addInterview(interview: Interview){
    this.interviewService.addInterview(interview).subscribe((interview => interviews.push(interview)));
  }

  save(){
      this.interview.id = interviews.length+1;
      this.interview.candidate_name = this.candidate_name;
      this.interview.level = this.level;
      this.interview.sub_size = this.num_sub;

      this.back_template = this.back_templates.find(template => template.title === this.sel_option);
      console.log("save",this.back_template);
      let i=0;
      this.addInterview(this.interview);
      for(let subjec of this.back_template.subjects){
        //console.log(i);
        // this.subject.id = 1;
        // this.subject.name = subjec.name;
        // console.log(this.subject.name);
        // this.subject.grade = this.gr_option;
        // this.subject.description = subjec.description;
        // this.subject.feedback = this.comment;
        // console.log(this.subject);
        // this.interview.subjects.push(this.subject);
        this.interview.subjects[i].name = subjec.name;
        this.subjectIn.name = subjec.name;
        this.interview.subjects[i].id = i+1;
        console.log("sub",subjec.subject);
        //this.addInterview(this.interview);
        for (var j = 0; j < subjec.subject.toString().split('\r').length; j++) {
          this.interview.subjects[i].description.push(subjec.subject.toString().split('\r')[j]);
          this.subjectIn.description.push(subjec.subject.toString().split('\r')[j]);
        }
        //this.interview.subjects[i].description.push(this.new_str);
        this.interview.subjects[i].feedback = this.comment;
        this.subjectIn.feedback =this.comment;
        this.interview.subjects[i].grade = this.gr_option;
        this.subjectIn.grade = this.gr_option;
        this.subjectIn.interview = this.interview.id;
        i++;
        console.log("sIn",this.subjectIn);

      }
      this.addSubject(this.subjectIn);
      //this.subject = this.interview.subjects[0];

      console.log(this.subjectIn);

      console.log("int",this.interview);

      //this.addInterview(this.interview);
      interviews.push(this.interview);
      this.router.navigateByUrl('interviews/my');
  }

  addInput(){
      //this.num_sub += 1;
  }

  addTemp(){
    //console.log(this.sel_option);

    //this.template = templates.find(template => template.title === this.sel_option);
    this.back_template = this.back_templates.find(template => template.title === this.sel_option);
    this.num_sub += this.back_template.subjects.length;
    console.log('my_temp',this.back_template);

    this.add_clicked = 1;
    //this.template.subjects[i].name;

    //our?.appendChild("<div *ngFor="let subject of template.subject; index as i"><span class="qu1">{{i+1}}</span><p class="naming">{{subject.name}}</p><select name="grd_tit" id="as_grade" [(ngModel)]="gr_option"><option *ngFor="let grade of grades">{{grade}}</option></select></div>")
    //console.log(this.template);


  }



}
