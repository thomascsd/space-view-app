import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: [
    `
      .bg-hero {
        background-image: url('/assets/bg.jpeg');
        background-size: cover;
        background-position: center;
      }

      .hero-title {
        color: white;
      }
    `,
  ],
})
export class HomeComponent {}
