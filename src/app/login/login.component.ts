import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logged:boolean = false;
  username = '';
  password = '';

  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  public log_b():any{
    console.log(this.username,this.password);
    if(this.username==='serik' && this.password ==='berik'){
           this.logged = true;
           this.messageEvent.emit(this.logged);
           this.router.navigateByUrl('');
    }
  }
}
