import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Template, templates } from '../modlues';

@Component({
  selector: 'app-my-templates',
  templateUrl: './my-templates.component.html',
  styleUrls: ['./my-templates.component.css']
})
export class MyTemplatesComponent implements OnInit {

  dt:string | undefined
  templates = templates;
  constructor() {
    this.dt = new Date().toISOString().slice(0, 10);
   }

  ngOnInit(): void {


  }

}
