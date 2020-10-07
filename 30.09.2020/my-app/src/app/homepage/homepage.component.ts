import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { // apstrādā līdz ko atver vietni
    this.page.username = sessionStorage.getItem("username");

  }

  //izvades dati
  page = {
    // max: "test",
    // index: "hey",
    username: ""
  }

  // method = {
  //   onEnterClick: () => {
  //     //funkcijas
  //     let random_value = (document.getElementById("uzdevums1") as HTMLInputElement).value;
  //     if (random_value) {
  //     }
  //   }
  // }


}
