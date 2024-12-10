import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { CommonModule } from '@angular/common';
import { AlertifyService } from '../_services/alertify.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    
    BsDropdownModule,
  ],
  providers: [AuthService],
})
export class NavComponent implements OnInit {
  model: any = {};
  jwtHelper = new JwtHelperService();

  constructor(
    public authservice: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.authservice.decodedToken = this.jwtHelper.decodeToken(token!);
    console.log(this.authservice.decodedToken);
    console.log('nav');
  }

  login() {
    this.authservice.login(this.model).subscribe(
      (next) => {
        this.alertify.success('تم الدخول بنجاح');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  loggedIn() {
    return this.authservice.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('تم الخروج');
  }
}
