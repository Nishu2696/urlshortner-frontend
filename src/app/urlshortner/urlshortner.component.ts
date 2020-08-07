import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-urlshortner',
  templateUrl: './urlshortner.component.html',
  styleUrls: ['./urlshortner.component.css']
})
export class UrlshortnerComponent implements OnInit {

  urldata: FormGroup;
  shorturl;
  urlcount;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: BackendService
  ) { 
    this.urldata = new FormGroup({

      "longUrl": new FormControl("", [Validators.required, Validators.email]),
      //"password": new FormControl("", Validators.required),

    });
  }

  ngOnInit() {
  }

  senddata(){
    this.service.shorturl(this.urldata.value).subscribe((data) => {
      alert("longUrl has been sent");
      this.changed();
    });
  }

  changed(){
    this.service.getdata().subscribe((data) => {
      //console.log(data);
      this.shorturl = data;
      console.log("shorturllist", this.shorturl);
    });
  }

  count(value){
    alert("hello");
    this.urlcount = this.shorturl[value].shortUrl;
    console.log("line-52",this.urlcount);
    this.service.getcount(this.urlcount).subscribe((data) => {
      console.log(data);
      let longurl = data.shortUrl;
      let count =`Total click: ${data.clickCount}`;
      let url = document.getElementById("urlshortner");
      url.setAttribute("href", longurl);
      document.getElementById("shortner").appendChild(url);
      let clickcount = document.getElementById("count");
      clickcount.innerHTML = count;
      document.getElementById("shortner").appendChild(clickcount);
      this.shorturl = data;
      console.log("this.shorturl,", this.shorturl);
    })
  }

}
