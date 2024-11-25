import { Component, OnInit } from '@angular/core';
import{FormsModule} from'@angular/forms';
import { AuthService } from '../_services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports:[FormsModule,CommonModule],
  providers:[AuthService]
})
export class NavComponent implements OnInit {
  model:any={};
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authservice.login(this.model).subscribe(
      next=>{console.log('done')}
      , error=>{console.log('er')} 
    );
  }

  loggedIn(){
    const token=localStorage.getItem('token');
    return !! token;
    }

    loggedOut(){
      localStorage.removeItem('token');
      console.log('out');
    }
  

}
