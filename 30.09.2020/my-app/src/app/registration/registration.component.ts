import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vald = false;
  formClass = "form-control";

  checkForm = () => {
    let userName = (document.getElementById("usernameID") as HTMLInputElement).value;
    let password = (document.getElementById("PasswordID") as HTMLInputElement).value;
    let email = (document.getElementById("EmailID") as HTMLInputElement).value;
    let phone = (document.getElementById("PhoneID") as HTMLInputElement).value;
    let date = (document.getElementById("DateID") as HTMLInputElement).value;

    let regexName = new RegExp("^[a-zA-Z0-9 -]*$"); // name    
    //let regexPass = new RegExp(""); //password
    let regexPhone = new RegExp("^[+][3][7][1][ ][2][0-9]{7}$");// phone
    let regexMail = new RegExp("^[a-zA-Z0-9_-]*[@][a-zA-Z0-9]*[\.][a-zA-Z]{3}$"); // mail
    let regexDate = new RegExp(""); // date

    let isMatch = regexName.test(userName);
   // let isMatch1 = regexPass.test(password);
    let isMatch2 = regexPhone.test(email);
    let isMatch3 = regexMail.test(phone);
    let isMatch4 = regexDate.test(date);

    console.log(password)

    if (!isMatch) {
      this.formClass = "form-control is-invalid";
      return this.vald = true;
    } else {
      this.formClass = "form-control is-valid";
      return this.vald = false;
    }
  }
}
