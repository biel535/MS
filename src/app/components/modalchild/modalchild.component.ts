import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dyplomy } from 'src/app/dyplomy-data';

@Component({
  selector: 'app-modalchild',
  templateUrl: './modalchild.component.html',
  styleUrls: ['./modalchild.component.scss']
})


export class ModalchildComponent {
  @Input() dyplom: any;
  dyplomList = dyplomy;
  constructor(
    public dialogRef: MatDialogRef<ModalchildComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  imageSrc!: string;

  ngOnInit() {
    this.imageSrc = this.data.imageSrc;
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
