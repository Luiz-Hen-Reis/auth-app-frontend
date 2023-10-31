import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  isLoginPage: boolean = true;
  public formGroup!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    const urlString = this.router.url;

    this.formGroup = this.formBuilder.group({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    });

    if (urlString.includes('login')) {
      this.isLoginPage = true;
    } else {
      this.isLoginPage = false;
    }
  }

  onSubmit() {}
}
