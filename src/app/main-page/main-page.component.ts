import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  is_logged:boolean = false;
  ngOnInit(): void {

  }

}
