import { Component, OnInit } from '@angular/core';
import {UserService} from "../../http/modules/user/service/user.service";
import {Router} from "@angular/router";
import {NbGlobalPosition, NbToastrService} from "@nebular/theme";

export interface CreateAccount {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  providers: [NbToastrService]
})
export class CreateAccountComponent implements OnInit {
  form: CreateAccount = {
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: NbToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.create(this.form).subscribe(data => {
      if (data) {
        (async (): Promise<void> => {
          this.toastr.show('Conta criar com sucesso!','Sucesso', {
            position: 'center' as NbGlobalPosition,
          })
        })().then(() => {
          this.router.navigate(['/login'])
        })
      }
    })
  }

}
