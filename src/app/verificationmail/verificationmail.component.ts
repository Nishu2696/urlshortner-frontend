import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-verificationmail',
  templateUrl: './verificationmail.component.html',
  styleUrls: ['./verificationmail.component.css']
})
export class VerificationmailComponent implements OnInit {

  verify_email;
  verified_email;
  url;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: BackendService,
    private router: Router
  ) { 
    this.verify_email = this.activatedRoute.snapshot.params.id;
    this.verified_email = {
      "email": this.verify_email
    };
    this.url = {
      "longUrl": "http://localhost:4000/login"
    }
  }

  ngOnInit() {

    console.log("this.verified_email", this.verified_email);
    console.log("this.verified_email", this.verified_email.value);
    // this.service.verifying_email(this.verify_email).then((data) => {
    //   this.router.navigate(['/login']);
    // })
    this.service.verifying_email(this.verified_email).subscribe((data) => {
      alert("verification successsfull");
      this.router.navigate(['/login']);
      // this.service.shorturl(this.url).subscribe((data) => {
      //   alert("long url has been successfully passed");
      //   this.router.navigate(['/urlshortner']);
      // });
    });
  }

}
