import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'image-modal',
  template: `
          <img style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            max-width: 100%;
            max-height: 100%;"
          src={{imageURL}} (click)="dialogRef.close()" />
    `,
})
export class ImageModal {
  public imageURL: string;
  constructor(public dialogRef: MatDialogRef<ImageModal>) { }
}
