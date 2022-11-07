import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeHtml'
})
export class Safe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer) {
  }

  transform(value: any, ...args: unknown[]): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
