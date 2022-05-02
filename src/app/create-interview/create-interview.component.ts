import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Interview, interviews, templates,Subject, subjects} from '../modlues';

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

  grades = ['not checked','junior','middle','senior'];
  gr_option = 'not checked';
  comment = '';

  template_titles = ['Select a grade','.NET Developer', 'Front-End Developer'];
  template : any;
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
  subject: Subject = {
    id: 1,
    name: '',
    grade: '',
    description: [],
    feedback: '',
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(){
      this.interview.id = interviews.length+1;
      this.interview.candidate_name = this.candidate_name;
      this.interview.level = this.level;
      this.interview.sub_size = this.num_sub;

      this.template = templates.find(template => template.title === this.sel_option);
      console.log(this.template);
      let i=0;
      for(let subjec of this.template.subjects){
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
        this.interview.subjects[i].id = i+1;
        for (var j = 0; j < subjec.subject.length; j++) {
          this.interview.subjects[i].description.push(subjec.subject[j]);
        }
        this.interview.subjects[i].feedback = this.comment;
        this.interview.subjects[i].grade = this.gr_option;
        i++;
      }
      interviews.push(this.interview);
      this.router.navigateByUrl('interviews/my');
  }

  addInput(){
      //this.num_sub += 1;
  }

  addTemp(){
    //console.log(this.sel_option);

    this.template = templates.find(template => template.title === this.sel_option);
    this.num_sub += this.template.subjects.length;
    this.add_clicked = 1;
    //this.template.subjects[i].name;

    //our?.appendChild("<div *ngFor="let subject of template.subject; index as i"><span class="qu1">{{i+1}}</span><p class="naming">{{subject.name}}</p><select name="grd_tit" id="as_grade" [(ngModel)]="gr_option"><option *ngFor="let grade of grades">{{grade}}</option></select></div>")
    //console.log(this.template);


  }



}
