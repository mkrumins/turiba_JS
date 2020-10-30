import { HttpClient } from '@angular/common/http';
import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.mainCounter();
    setTimeout(() => {
      this.showLoading = false
    }, 5000);
  }

  FirstNameArr = ["Anna", "Victoria", "Elizabete", "Olga"]
  checkForLiza = (vards: string) => {
    if (vards == null) {
      alert("Hjuston, mums ir problemas");
      return [];
    }
    else {
      if (vards == "Elizabete")
        return ["uniq"];
      else
        return ["red"];
    }
  }

  getStyle = () => {
    return { color: "firebrick" };
    let a = "3432432";
    let template = new RegExp("^[a-zA-Z0-9\.\-\_]+[@]{1}[a-zA-Z0-9]+\.{1}[a-zA-Z]{2,3}$");
    let isMatch = template.test(a); // true vai false
  }

  paraditCiparus = true;
  onClickMe_Clicked = () => {
    this.paraditCiparus = !this.paraditCiparus;//true=>false 
  }


  showLoading = true;
  counter = 5;
  test1 = () => {

    this.showLoading=true;
    this.http.get("https://gorest.co.in/public-api/users")
      .toPromise().then((result) => {
        console.log(result);
      }).finally (() => {
        this.showLoading=false;
      })
  }

  mainCounter = () => {
    if (this.counter > 0) {
      setTimeout(() => {
        this.counter--;
        this.mainCounter();
      }, 1000);


    }
  }
}
