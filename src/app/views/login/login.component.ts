import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials: {
    login: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {
    
  }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, , Validators.minLength(3)]
    });
  }

  login() {
    console.log('dkk');
     this.loginService.authenticate(this.credentials,()=>{
      console.log('dkk');
      this.router.navigateByUrl('/dashboard');
     })
  }
// if (!this.loginService.authentificated) {
    //   this.router.navigateByUrl('/login');
    // } else {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }
