import { DatePipe } from '@angular/common';
import { Component, getModuleFactory, OnInit } from '@angular/core';
import { Template, templates } from '../modlues';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-my-templates',
  templateUrl: './my-templates.component.html',
  styleUrls: ['./my-templates.component.css']
})
export class MyTemplatesComponent implements OnInit {

  dt:string | undefined
  templates = templates;
  back_templates: Template[] = []
  constructor(private templateService: TemplateService) {
    this.dt = new Date().toISOString().slice(0, 10);
   }

  ngOnInit(): void {
    this.getTemplates();
    console.log(this.back_templates);
    console.log(this.back_templates);



  }
  getTemplates(){
    this.templateService.getTemplates().subscribe((data)=>{
          console.log(data);
          this.back_templates = data;
          console.log(this.back_templates);
    });
}
}
