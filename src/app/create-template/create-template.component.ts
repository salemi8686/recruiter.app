import { Template, templates } from '../modlues';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  templates = templates;
  title ='';
  subject_ts:string[] = ['','','',''];
  queues:number[] = [1,2,3,4];
  jun1='';
  mid1='';
  sen1='';
  public num_sub: number = 1;

  template: Template = {
    id: 0,
    title: '',
    subjects: [{name:'',subject: []}]
  }
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }
  myFunction(event: any): any{
    console.log(event); // here you are getting the value

  }

  save(){

    this.template.id = templates.length+1;
    this.template.title = this.title;
    this.template.subjects[0].name = this.subject_ts[0];
    this.template.subjects[0].subject.push(this.jun1);
    this.template.subjects[0].subject.push(this.mid1);
    this.template.subjects[0].subject.push(this.sen1);
    console.log(this.template);
    templates.push(this.template);
    this.router.navigateByUrl('interviews/templates/my');
  }
  addInput(){
    this.num_sub+=1;
    let oldform = document.getElementById("fm2");
    let bodyDiv = document.getElementById("fm1");
    let inp = oldform?.getElementsByClassName("txt1");
    if (oldform?.cloneNode(true)){
        let newform = oldform.cloneNode(true);
        newform.childNodes[0].textContent = this.queues[this.num_sub].toString();
        bodyDiv?.appendChild((newform));
    }
  }

}


