import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { BackendService } from '../backend.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  login: FormGroup
  verify_email;

  constructor(
    private fb: FormBuilder,
    private service: BackendService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    alert("hi reset your password");
    this.verify_email = this.activatedRoute.snapshot.params.id;
    this.login = new FormGroup({

      //"email": new FormControl("", [Validators.required, Validators.email]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", Validators.required),
      "confirmpassword": new FormControl("", Validators.required)

    });
    console.log(this.verify_email);

  }

  ngOnInit(): void {
  }

  senddata() {
    this.service.change(this.login.value).subscribe((data) => {
      alert("New Password has been changed to the registered user");
    });
    this.router.navigate(['/login']);
  }

}
