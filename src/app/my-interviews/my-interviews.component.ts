import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
import { Interview, interviews, subjects } from '../modlues';

@Component({
  selector: 'app-my-interviews',
  templateUrl: './my-interviews.component.html',
  styleUrls: ['./my-interviews.component.css']
})
export class MyInterviewsComponent implements OnInit {

  subjects = subjects;
  interviews = interviews;
  back_interviews: Interview[] = [];
  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {
    this.getInterviews();
  }

  getInterviews(){
    this.interviewService.getInterviews().subscribe((data)=>{
      console.log(data);
      this.back_interviews = data;
      console.log(this.back_interviews);
});
  }
}
