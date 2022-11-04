import { Injectable } from '@angular/core';
import {LocalStorageService} from "../local-storage/local-storage.service";
import {Router, Routes} from "@angular/router";

@Injectable()
export class RoutesValidatorService {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  async isLogged(): Promise<string> {
    const token = await this.localStorageService.get('token');
    if (!token) {
      this.router.navigate(['/login'])
      return 'no-logged';
    }
    return 'logged';
  }

}
