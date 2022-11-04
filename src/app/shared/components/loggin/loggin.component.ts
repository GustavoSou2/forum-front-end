import { Component, OnInit } from '@angular/core';

export interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {
  form: Login = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
