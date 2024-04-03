import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    birthDate: new FormGroup({
      day: new FormControl("", [
        Validators.required,
        Validators.min(1),
        Validators.max(31),
      ]),
      month: new FormControl("", [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ]),
      year: new FormControl("", [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
      ]),
    }),
  });

  updateProfile() {
    this.signUpForm.patchValue({
      name: "",
      birthDate: {
        day: '',
        month: '',
        year: '',
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
