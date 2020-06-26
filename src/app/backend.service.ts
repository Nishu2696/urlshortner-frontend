import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  register(reg_details): Observable<any>{
    return this.http.post(`${environment.apiURL}register`, reg_details);
    //return this.http.post("http://localhost:3000/register", reg_details);
  }

  login(log_details): Observable<any>{
    return this.http.post(`${environment.apiURL}login`, log_details);
    //return this.http.post("http://localhost:3000/login", log_details);
  }

  verifying_email(verify_details): Observable<any>{
    return this.http.post(`${environment.apiURL}verificationemail`, verify_details);
    return this.http.post("http://localhost:3000/verificationemail", verify_details);
  }

  shorturl(url_details): Observable<any>{
    return this.http.post(`${environment.apiURL}createurlshortner`, url_details);
    //return this.http.post("http://localhost:3000/createurlshortner", url_details);
  }

  

  reset(reset_details): Observable<any>{
    return this.http.post(`${environment.apiURL}`, reset_details);
    //return this.http.post("http://localhost:3000/changepassword", reset_details)
  }

  change(change_details): Observable<any>{
    return this.http.post(`${environment.apiURL}interchangepassword`, change_details);
    //return this.http.post("http://localhost:3000/interchangepassword", change_details)
  }

  getdata(): Observable<any>{
    return this.http.get(`${environment.apiURL}urlshortnerapi`);
    // return this.http.get("http://localhost:3000/urlshortnerapi");
  }

  getcount(value): Observable<any>{
    return this.http.get(`${environment.apiURL}+${value}`);
    //return this.http.get(`http://localhost:3000/${value}`);
  }
}
