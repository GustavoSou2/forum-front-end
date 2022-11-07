import { Component, OnInit } from '@angular/core';
import {UserService} from "../../http/modules/user/service/user.service";
import {LocalStorageService} from "../../shared/helpers/local-storage/local-storage.service";
import {Router} from "@angular/router";

export interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  form: Login = {
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.authentication(this.form).subscribe(({ token }) => {
      (async (): Promise<void> => {
        this.localStorageService.set('token', token)
      })().then(() => this.router.navigate(['/home']))
    })
  }
}
