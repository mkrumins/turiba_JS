// Loģika
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // funkcijām jāiet component klasē

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  admin = {
    login: "admin",
    passw: "parole"
  }

  page = {
    showError: false,
    errorMessage: "Invalid password or login"
  }

  methods = {
    onLoginClick: () => {
      // let login = $("#loginId").value();
      let login = (document.getElementById("loginId") as HTMLInputElement).value;
      let password = (document.getElementById("passwordId") as HTMLInputElement).value;

      if (login != this.admin.login || password != this.admin.passw) {
        this.page.showError = true;
      } else {
        this.page.showError = false;
        environment.userName = "admin"; // piefiksē lietotāju ?
        this.router.navigateByUrl("/home"); // redirects uz /home, kas apstrādājas šīs klases constructorā
      }
    }
  }
}