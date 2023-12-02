import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { User } from './../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @ViewChild('form') form!: NgForm;

  user!: User;
  users?: User[];

  userRepassword: string = '';

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = new User(Math.round(Math.random() * 1000), '', '');
    this.users = this.userService.getUsers();
  }

  ngOnSubmit() {
    this.isSubmitted = true;
    if (!this.userService.isExist(this.user.username)) {
      this.userService.save(this.user);
    } else {
      this.userService.update(this.user);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Conta criada com sucesso!';
    this.form.reset;
    this.user = new User(Math.round(Math.random() * 1000), '', '');
    this.users = this.userService.getUsers();
  }

  ngOnEdit(user: User) {
    let clone = User.clone(user);
    this.user = clone;
  }

  ngOnDelete(username: string) {
    let confirmation = window.confirm(
      'Quer mesmo remover'
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.userService.delete(username);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso.'
    } else {
      this.message = 'O item não pôde ser removido.'
    }
    this.users = this.userService.getUsers();
  }
}
