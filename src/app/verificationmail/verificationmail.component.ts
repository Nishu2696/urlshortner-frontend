import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-verificationmail',
  templateUrl: './verificationmail.component.html',
  styleUrls: ['./verificationmail.component.css']
})
export class VerificationmailComponent implements OnInit {
  email;
  verificationToken;
  verificationDone = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: BackendService,
    private router: Router
  ) {
    this.verificationToken = this.activeRoute.snapshot.params.token;
    this.email = this.activeRoute.snapshot.params.email;
  }

  ngOnInit() {
    console.log(this.verificationToken, this.email);
    
    this.service.verifying_email({ verificationToken: this.verificationToken, email: this.email }).subscribe((data) => {
      this.verificationDone = true;
    }, (err) => {
      console.log(err);
    });
  }

}
