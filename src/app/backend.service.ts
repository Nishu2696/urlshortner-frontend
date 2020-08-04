import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  link = "https://urlshortner-nishu.herokuapp.com/";

  constructor(
    private http: HttpClient
  ) { }

  register(reg_details): Observable<any>{
    return this.http.post( `${this.link}register`, reg_details);
    // return this.http.post("http://localhost:3000/register", reg_details);
  }

  login(log_details): Observable<any>{
    return this.http.post(`${this.link}login`, log_details);
    //return this.http.post("http://localhost:3000/login", log_details);
  }

  verifying_email(verify_details): Observable<any>{
    return this.http.post(`${this.link}accountverification`, verify_details);
    // return this.http.post("http://localhost:3000/accountverify/:token/:emai", verify_details);
  }

  shorturl(url_details): Observable<any>{
    return this.http.post(`${this.link}createurlshortner`, url_details);
    //return this.http.post("http://localhost:3000/createurlshortner", url_details);
  }

  

  reset(reset_details): Observable<any>{
    return this.http.post(`${this.link}forgotpassword`, reset_details);
    //return this.http.post("http://localhost:3000/forgotpassword", reset_details)
  }

  change(change_details): Observable<any>{
    return this.http.post(`${this.link}resetpassword`, change_details);
    //return this.http.post("http://localhost:3000/resetpassword", change_details)
  }

  getdata(): Observable<any>{
    return this.http.get(`${this.link}urlshortnerapi`);
    // return this.http.get("http://localhost:3000/urlshortnerapi");
  }

  getcount(value): Observable<any>{
    return this.http.get(`${this.link}+${value}`);
    //return this.http.get(`http://localhost:3000/${value}`);
  }
}
