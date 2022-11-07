import {Component, OnInit, Type} from '@angular/core';
import {NbDialogService} from "@nebular/theme";

@Component({
  selector: 'app-dialog-service',
  template: ``,
  styles: [``],
  providers: [NbDialogService]
})
export class DialogServiceComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void { }

  openDialog<T>(template: Type<T>, context?: Partial<T>, onClose?: any) {
    this.dialogService.open<T>(template, {
      closeOnBackdropClick: false,
      context
    })
      .onClose.subscribe(() => onClose)
  }
}
