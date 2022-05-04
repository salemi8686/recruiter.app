import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewService } from '../interview.service';
import { Interview, interviews } from '../modlues';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.css']
})
export class InterviewDetailComponent implements OnInit {

  interview: Interview | undefined;
  back_interview!: Interview;
  constructor(private route: ActivatedRoute,private interviewService: InterviewService,private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const interviewIdFromRoute = Number(routeParams.get('interviewId'));

  // Find the product that correspond with the id provided in route.
    this.interview = interviews.find(interview => interview.id === interviewIdFromRoute);
    this.getInterview(interviewIdFromRoute);
  }

  getInterview(id:number){
    this.interviewService.getInterview(id).subscribe((data)=>{
          this.back_interview = data;
          console.log(data);
          console.log(this.back_interview);
          this.back_interview.sub_size = this.back_interview.subjects.length;
    });
  }
  deleteInterview(id:number){
    this.interviewService.deleteInterview(id).subscribe();
  }
  dltInt(){
    const routeParams = this.route.snapshot.paramMap;
    const interviewIdFromRoute = Number(routeParams.get('interviewId'));
     this.deleteInterview(interviewIdFromRoute);
     //this.router.navigateByUrl('interviews/my');
  }

}
