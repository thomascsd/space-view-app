import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `<nav class="d-flex flex-row">
    <a class="ms-auto" href="/">Space Viewer</a>
    <a [routerLink]="['/pictureOfDay']" routerLinkActive="active">Picutre of day</a>
    <a [routerLink]="['/spacePictures']" routerLinkActive="active">Space Pictures</a>
  </nav>`,
  styles: [
    `
      nav {
        border-top: 6px solid #40aff4;
      }
    `,
  ],
})
export class HeaderComponent {}
