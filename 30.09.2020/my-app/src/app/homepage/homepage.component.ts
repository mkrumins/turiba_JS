import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
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


  // MD 17.
  method = {
    onEnterClick: () => {
      let random_value = (document.getElementById("get_string") as HTMLInputElement).value;
      let max_number = 0;
      let ind = 0;
      let maxIndex = 0;
      for (let i = 0; i < random_value.length; i++) {
        let parsValue = parseInt(random_value[i]);
        ind += 1; 
        if (!isNaN(parsValue)) {
          if (parsValue > max_number) {
            maxIndex = i;
            max_number = parsValue;
          }
        }
      }
      this.page.max = max_number;
      this.page.index = maxIndex;
    }
  }

  page = {
    max: null,
    index: null,
    username: ""
  }
}