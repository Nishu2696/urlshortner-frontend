import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificationmailComponent } from './verificationmail/verificationmail.component';
import { UrlshortnerComponent } from './urlshortner/urlshortner.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: RegisterComponent
  },
  {
    path: "verificationemail/:id",
    component: VerificationmailComponent
  },
  {
    path: "urlshortner",
    component: UrlshortnerComponent
  },
  {
    path: "forgetpassword",
    component: ForgetpasswordComponent
  },
  {
    path: "resetpassword/:id",
    component: ResetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
