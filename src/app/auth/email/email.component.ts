import { Component } from '@angular/core';
import { AuthService } from '../../servis/auth.service';
import { Router } from '@angular/router';


import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, NgIf], 
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email = '';
  code = '';
  showCodeInput = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmitEmail() {
    this.authService.sendCode(this.email).subscribe(() => {
      this.showCodeInput = true;
    });
  }

  onSubmitCode() {
    this.authService.verifyCode(this.email, this.code).subscribe(() => {
      // Перекидываем куда угодно, например обратно на email
      this.router.navigate(['/email']);
    });
  }
}