import { Component, OnInit } from '@angular/core';
import { WebStorageUtil } from '../util/web-storage-util';
import { User } from '../model/user';
import { Constants } from '../util/constants';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginUser = new User(Math.round(Math.random() * 1000), '', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onLogin() {
    if (
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password
    ) {
      this.loginService.login();
    } else {
      alert(
        'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }
}
