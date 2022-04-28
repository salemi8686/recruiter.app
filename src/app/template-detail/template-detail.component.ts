import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Template, templates } from '../modlues';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {



  dt : string | undefined
  templates = templates;
  constructor(private route: ActivatedRoute) {

  }

  template : any;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const templateIdFromRoute = Number(routeParams.get('templateId'));
    this.dt = new Date().toISOString().slice(0, 10);
  // Find the product that correspond with the id provided in route.
    this.template = templates.find(template => template.id === templateIdFromRoute )


  }
}
