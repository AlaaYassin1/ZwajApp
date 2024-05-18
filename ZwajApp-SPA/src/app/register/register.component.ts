import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';

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
  constructor(private authService:AuthService,private alertify:AlertifyService ) { }

  ngOnInit() {
    
  }
  register(){
    this.authService.register(this.model).subscribe(
      ()=>{
      this.alertify.success('تم الاشتراك بنجاح')
      },
      error=>{
       this.alertify.error(error);//
      }
    )

  }

  cancel(){
    this.cancelRegister.emit(false);
    }

}
