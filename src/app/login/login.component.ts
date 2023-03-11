import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginButtonsVisible: boolean = true;
  form: UntypedFormGroup;
  constructor(private contextService: ContextService, private formBuilder: UntypedFormBuilder){
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })

  }

  login(){
    this.loginButtonsVisible = false
  }
  
  cancel(){
    this.loginButtonsVisible = true
  }

}
