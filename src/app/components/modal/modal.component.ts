import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalchildComponent } from '../modalchild/modalchild.component';
import { dyplomy } from 'src/app/dyplomy-data';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  dyplomList = dyplomy;
  constructor(public dialog: MatDialog) {}

  openModal(imageSrc: string): void {
    this.dialog.open(ModalchildComponent, {
      width: 'auto',
      height: 'auto',
      data: { imageSrc: imageSrc }
    });
  }
}
