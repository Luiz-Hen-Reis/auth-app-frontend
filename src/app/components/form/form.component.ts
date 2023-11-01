import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormData } from 'src/app/types/form-data';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  isLoginPage: boolean = true;
  public formGroup!: FormGroup;
  urlString = this.router.url;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group<FormData>({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    });

    if (this.urlString.includes('login')) {
      this.isLoginPage = true;
    } else {
      this.isLoginPage = false;
    }
  }

  onSubmit() {
    this.authService.authenticate(this.isLoginPage, this.formGroup.value);
  }
}
