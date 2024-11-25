import { Component, OnInit } from '@angular/core';
import { register } from 'module';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RegisterComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  registerMode: Boolean = false;
  constructor() {}

  ngOnInit() {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegister(mode: boolean) {
    this.registerMode = mode;
  }
}
