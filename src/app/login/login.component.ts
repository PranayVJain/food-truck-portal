import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContextService } from '../context.service';
import { UserType } from "../models/user-type"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  form: UntypedFormGroup;
  constructor(private contextService: ContextService, private formBuilder: UntypedFormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  login(): void {
    if (this.form.get('username').value == 'admin' && this.form.get('password').value == 'admin') {
      this.contextService.setUser({ name: this.form.get('username').value, 'type': UserType.ADMIN });
      this.router.navigate(["/"]);
    } else {
      alert("Invalid credentials");
    }

  }

  loginAsGuestUser() {
    this.contextService.setUser({ name: 'Guest', 'type': UserType.GUEST });
    this.router.navigate(["/"]);
  }

}
