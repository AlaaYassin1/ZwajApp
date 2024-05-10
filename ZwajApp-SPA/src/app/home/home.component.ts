import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[RegisterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode:boolean=false; 
values:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // this.getValues();
  }

  registerToggle(){
    this.registerMode=true;
  }
  cancelRegister(mode:boolean){
    this.registerMode=mode;
  }

  //selectOptions
//   getValues(){
//     this.http.get('https://localhost:7282/api/Value').subscribe(
//       response=>{this.values=response;},
//       error=>{console.log(error);}
//     );
// }

}
