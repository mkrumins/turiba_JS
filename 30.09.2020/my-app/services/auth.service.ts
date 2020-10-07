import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUsernameCorrect = () => {
    const username = sessionStorage.getItem("username");
    if (username == null || username.length < 3)
      return false;
    else
      return true;
  }
}
