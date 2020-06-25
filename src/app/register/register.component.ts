import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration:FormGroup

  constructor(
    private fb: FormBuilder,
    private service: BackendService
  ) { 
    this.registration = new FormGroup({
      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "phone_number": new FormControl("", Validators.required),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", Validators.required),
      "confirmpassword": new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  senddata(){
    console.log(this.registration.value);
    this.service.register(this.registration.value).subscribe((data) => {
      alert("User has been registered");
    });
  }

}
