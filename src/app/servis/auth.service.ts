import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  sendCode(email: string) {
    return this.http.post('http://localhost:5000/auth/send-code', { email });
  }

  verifyCode(email: string, code: string) {
    return this.http.post<{ token: string }>('http://localhost:5000/auth/verify-code', { email, code }).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  redirectToLogin() {
    this.router.navigate(['/email']);
  }
  logout() {
  localStorage.removeItem(this.tokenKey);
  this.router.navigate(['/email']);
  }
}