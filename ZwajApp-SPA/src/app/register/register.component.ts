import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success('تم الاشتراك بنجاح');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
