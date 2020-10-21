import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  arr = ["Anna", "Victoria", "Jelizaveta", "Olga"]

  checkForLiza = (vards: string) => {
    if (vards == null) {
      alert("Hjuston, mums ir problemas");
      return [];
    }
    else {
      if (vards == "Jelizaveta")
        return ["uniq"];
      else
        return ["red"];
    }
  }

  getStyle = () => {
    return { color: "pink", background: "orange" };
    let a = "3432432";
    let template = new RegExp("^[a-zA-Z0-9\.\-\_]+[@]{1}[a-zA-Z0-9]+\.{1}[a-zA-Z]{2,3}$");
    let isMatch = template.test(a); // true vai false
  }

  paraditCiparus = true;
  onClickMe_Clicked = () => {
  this.paraditCiparus = !this.paraditCiparus;//true=>false
  }

}
