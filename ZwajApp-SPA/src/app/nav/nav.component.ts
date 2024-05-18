import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { BsDropdownModule } from 'ngx-bootstrap';


import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';


@Component({
  selector: 'app-nav',
  standalone:true,
  imports:[FormsModule,CommonModule ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};
  constructor(public authService:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(
      next=>{
       this.alertify.success('تم الدخول بنجاح')
      },
      error=>{
      this.alertify.error('فشل في الدخول')
      }
    )
  }

  loggedIn(){
  return this.authService.loggedIn();
  }

  loggedOut(){
    localStorage.removeItem('token');
   this.alertify.message('تم الخروج');
  }

  
}
