import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormData } from '../types/form-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private base_url = 'http://localhost:5000';
  public token = '';

  constructor(private http: HttpClient, private router: Router) {}

  authenticate(isLoginPage: boolean, data: FormData) {
    if (isLoginPage) {
      try {
        return this.http
          .post(`${this.base_url}/auth/login`, {
            email: data.email,
            password: data.password,
          })
          .subscribe((res: any) => {
            this.token = res.token;
            sessionStorage.setItem('auth-app-token', this.token);
            this.router.navigate(['/home']);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        return this.http
          .post(`${this.base_url}/auth/register`, {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
          })
          .subscribe((res) => {
            this.router.navigate(['/auth/login']);
          });
      } catch (error) {
        console.log(error);
      }
    }

    return;
  }
}
