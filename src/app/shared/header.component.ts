import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `<nav class="navbar navbar-expand-lg bg-body">
    <div class="container-fluid">
      <a class="nav-brand" href="/">Space Viewer</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" [routerLink]="['/pictureOfDay']" routerLinkActive="active"
            >Picutre of day</a
          >
          <a class="nav-link" [routerLink]="['/spacePictures']" routerLinkActive="active"
            >Space Pictures</a
          >
        </div>
      </div>
    </div>
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
