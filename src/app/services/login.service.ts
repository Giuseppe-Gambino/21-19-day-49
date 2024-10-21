import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  puoiEntrare: boolean = false;

  login() {
    this.puoiEntrare = !this.puoiEntrare;
  }
}
