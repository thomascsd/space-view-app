import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  template: `<div class="d-flex flex-column main">
    <app-header></app-header>
    <main class="main-content content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </div> `,
  styles: [
    `
      .main {
        min-height: 100%;
      }

      .content {
        flex: 1;
        display: flex;
        justify-content: center;
        // flex-direction: column;
      }

      app-header,
      app-footer {
        height: 50px;
      }
    `,
  ],
})
export class LayoutComponent {}
