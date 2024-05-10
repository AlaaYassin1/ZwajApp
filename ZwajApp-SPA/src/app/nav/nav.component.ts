import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-nav',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(
      next=>{console.log('تم الدخول بنجاح')},
      error=>{console.log('فشل في الدخول')}
    )
  }

  loggedIn(){
    const token=localStorage.getItem('token');
    return !! token;
  }

  loggedOut(){
    localStorage.removeItem('token');
    console.log('تم الخروج');

  }

}
