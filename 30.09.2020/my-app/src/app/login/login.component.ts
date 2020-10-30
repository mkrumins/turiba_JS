// Loģika
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // funkcijām jāiet component klasē

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient) { }

  ngOnInit(): void {
    // let username = sessionStorage.getItem("username");
    if (this.authService.isUsernameCorrect())
      this.router.navigateByUrl("/home");
    else
      sessionStorage.clear();
  }


  admin = {
    login: "admin",
    passw: "parole"
  }

  page = {
    showError: false,
    errorMessage: "Invalid password or login",
    // l1: "", //JAUNS
    // p1: "" //JAUNS
  }

  methods = {
    onLoginClick: () => {
      // let login = $("#loginId").value();
      let login = (document.getElementById("loginId") as HTMLInputElement).value;
      let password = (document.getElementById("passwordId") as HTMLInputElement).value;    
      
      // let login = this.page.l1;//JAUNS
      // let password = this.page.p1;//JAUNS
      
      this.http.post("http://localhost:1081/checkUser",
        { "admin":login, "parole":password }).toPromise()
        .then((result) => {
          console.log("atnaca atbilde", result);
        })
        .catch(err => {
          console.log("Ir problēma");
        })
        
      if (login != this.admin.login || password != this.admin.passw) {
        this.page.showError = true;
      } else {
        this.page.showError = false;
        sessionStorage.setItem("username", login);
        this.router.navigateByUrl("/home"); // redirects uz /home, kas apstrādājas šīs klases constructorā
      }
    }
  }
}