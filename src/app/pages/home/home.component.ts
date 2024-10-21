import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private login: LoginService) {}

  entra() {
    this.login.login();
    console.log(this.login.puoiEntrare);
  }
}
