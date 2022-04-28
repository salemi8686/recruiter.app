import { Component, OnInit } from '@angular/core';
import { interviews, subjects } from '../modlues';

@Component({
  selector: 'app-my-interviews',
  templateUrl: './my-interviews.component.html',
  styleUrls: ['./my-interviews.component.css']
})
export class MyInterviewsComponent implements OnInit {

  subjects = subjects;
  interviews = interviews;
  constructor() { }

  ngOnInit(): void {
  }

}
