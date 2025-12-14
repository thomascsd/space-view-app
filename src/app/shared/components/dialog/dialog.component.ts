import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { DialogRef } from '@ngneat/dialog';
import { DialogData } from '../../../core/models/DialogData';

@Component({
    selector: 'app-dialog',
    imports: [],
    template: `
    <div class="image-dialog-content">
      <h2>{{ title }}</h2>
      <a [href]="url" target="_blank"><img src="{{ url }}" class="img-fluid rounded" alt="" /></a>
    </div>
  `,
    styles: [
        `
      .image-dialog-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        width: 80%;
        max-width: 600px;
      }
    `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  ref: DialogRef<DialogData, boolean> = inject(DialogRef);

  get title(): string {
    return this.ref.data.title;
  }
  get url(): string {
    return this.ref.data.url;
  }
}
