import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { BsDropdownModule } from 'ngx-bootstrap';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //title = 'ZwajApp-SPA';
  jwtHelper=new JwtHelperService();
  constructor(public authService:AuthService) {
  }

  ngOnInit() {
    const token=localStorage.getItem('token');
     this.authService.decodedToken=this.jwtHelper.decodeToken('token');
  }
}
