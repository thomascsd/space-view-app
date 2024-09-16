import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styles: [
    `
      nav {
        border-top: 6px solid #40aff4;
      }
    `,
  ],
})
export class HeaderComponent {}
