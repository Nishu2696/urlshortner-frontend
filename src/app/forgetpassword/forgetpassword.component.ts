import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  login: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: BackendService,
    private router: Router
  ) { 
    this.login = new FormGroup({

      "email": new FormControl("", [Validators.required, Validators.email]),
      //"password": new FormControl("", Validators.required),

    });
  }

  ngOnInit(): void {
  }

  senddata(){
    this.service.reset(this.login.value).subscribe((data) => {
      alert("login successful");
    });
  }
}
