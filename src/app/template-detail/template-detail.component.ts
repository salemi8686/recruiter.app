import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Template, templates } from '../modlues';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {



  dt : string | undefined
  templates = templates;
  constructor(private route: ActivatedRoute,private templateService: TemplateService) {

  }

  template : any;
  back_template!: Template;
  new_sub = '';
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const templateIdFromRoute = Number(routeParams.get('templateId'));
    this.dt = new Date().toISOString().slice(0, 10);
  // Find the product that correspond with the id provided in route.
    this.template = templates.find(template => template.id === templateIdFromRoute );
    this.getTemplate(templateIdFromRoute);
  }
  getTemplate(id:number){
    this.templateService.getTemplate(id).subscribe((data)=>{
          this.back_template = data;
          console.log(data);
          console.log(this.back_template);

    });
}
}
