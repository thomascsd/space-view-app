import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  template: `<div class="d-flex flex-column">
    <app-header></app-header>
    <main class="container-fluid flex-grow-1">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </div> `,
  styles: [``],
})
export class LayoutComponent {}
