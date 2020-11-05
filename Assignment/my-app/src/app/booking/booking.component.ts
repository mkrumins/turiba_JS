import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  form = new FormGroup ({
    full_name: new FormControl ("",[Validators.required, Validators.pattern("^[a-zA-Z ]{4,40}$")]),
    number: new FormControl ("",[Validators.required, Validators.pattern("^[+][3][7][1][ ][2][0-9]{7}$")]), //+371 26666666
    email: new FormControl ("",[Validators.required,Validators.email]),
    adults: new FormControl ("2",[Validators.required,Validators.min(0)]),
    children: new FormControl ("0",[Validators.required,Validators.min(0)]),
    dateIn: new FormControl ("",Validators.required),
    dateOut: new FormControl ("",Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
  alert("Welome: " + this.form.value.full_name);

  }
}
