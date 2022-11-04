import { Component, OnInit } from '@angular/core';
import {RoutesValidatorService} from "../../helpers/routes-validator/routes-validator.service";
import {LocalStorageService} from "../../helpers/local-storage/local-storage.service";
import {NbToastrService} from "@nebular/theme";

interface IMenu {
  description: string;
  icon: string;
  to: string;
  status: string;
  children?: string[];
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [RoutesValidatorService, LocalStorageService]
})
export class MenuComponent implements OnInit {
  menuState: boolean = false;

  readonly menu: IMenu[] = [
    {
      description: "Home",
      icon: "home",
      to: "home",
      status: 'warning'
    },
    {
      description: "Popular",
      icon: "star-outline",
      to: "popular",
      status: 'primary'
    },
    {
      description: "Reading List",
      icon: "list-outline",
      to: "reading-list",
      status: 'info'
    },
    {
      description: "Subscribe",
      icon: "bookmark-outline",
      to: "subscribe",
      status: 'success'
    }
  ]

  constructor(
    private routesValidatorService: RoutesValidatorService
  ) { }

  ngOnInit(): void {
    this.routesValidatorService.isLogged()
  }

}
