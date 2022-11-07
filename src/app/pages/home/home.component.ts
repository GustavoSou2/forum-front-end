import { Component, OnInit } from '@angular/core';
import {UserService} from "../../http/modules/user/service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.list()
  }

}
