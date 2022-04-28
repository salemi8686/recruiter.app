import { Component, OnInit } from '@angular/core';
import { templates } from '../modlues';

@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.css']
})
export class CreateInterviewComponent implements OnInit {

  num_sub=0;
  candidate_name:string = '';
  sel_option='Select a template';
  queues = [0,1,2,3,4,5];

  grades = ['not checked','junior','middle','senior'];
  gr_option = 'not checked';
  template_titles = ['Select a grade','.NET Developer', 'Front-End Developer'];
  template : any;
  add_clicked:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  save(){

  }

  addInput(){
      //this.num_sub += 1;
  }

  addTemp(){
    console.log(this.sel_option);

    this.template = templates.find(template => template.title === this.sel_option);
    this.num_sub += this.template.subjects.length;
    this.add_clicked = 1;
    console.log(this.add_clicked);

    //our?.appendChild("<div *ngFor="let subject of template.subject; index as i"><span class="qu1">{{i+1}}</span><p class="naming">{{subject.name}}</p><select name="grd_tit" id="as_grade" [(ngModel)]="gr_option"><option *ngFor="let grade of grades">{{grade}}</option></select></div>")
    console.log(this.template);


  }

}
