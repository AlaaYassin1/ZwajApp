import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-value',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
    console.log(this.values);
  }


  getValues(){
    this.http.get('https://localhost:7282/api/Value').subscribe(
      response=>{this.values=response;},
      error=>{console.log(error);}
    )

    
  }

}
