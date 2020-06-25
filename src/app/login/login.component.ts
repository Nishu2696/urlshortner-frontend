import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: BackendService,
    private router: Router
  ) {
    this.login = new FormGroup({

      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", Validators.required),

    });
  }

  ngOnInit(): void {
  }

  senddata(){
    this.service.login(this.login.value).subscribe((data) => {
      alert("login successful");
      this.router.navigate(['/urlshortner']);
    });
  }

  reset(){
    this.router.navigate(['/forgetpassword']);
  }

  urlshortner(){
    this.router.navigate(['/urlshortner']);
  }

}
