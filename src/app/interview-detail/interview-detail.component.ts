import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interview, interviews } from '../modlues';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.css']
})
export class InterviewDetailComponent implements OnInit {

  interview: Interview | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const interviewIdFromRoute = Number(routeParams.get('interviewId'));

  // Find the product that correspond with the id provided in route.
    this.interview = interviews.find(interview => interview.id === interviewIdFromRoute);
  }

}
