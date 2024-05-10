import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};
  // @Input() valuesFromRrgister:any;
  @Output() cancelRegister=new EventEmitter();
  constructor(private authService:AuthService ) { }

  ngOnInit() {
    
  }


  register(){
    this.authService.register(this.model).subscribe(
      ()=>{console.log('تم الاشتراك بنجاح')},
      error=>{console.log(error);}
    )

  }

  cancel(){
    console.log('ليس الان ');
    this.cancelRegister.emit(false);
    }

}
