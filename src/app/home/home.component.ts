import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styles: [
        `
      .bg-hero {
        background-image: linear-gradient(rgba(27, 38, 59, 0.6), rgba(27, 38, 59, 0.8)),
          url('/assets/bg.jpeg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
      }

      .hero-title {
        color: var(--text-light);
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        letter-spacing: 2px;
      }

      .hero-subtitle {
        color: var(--text-light);
        max-width: 600px;
        margin: 0 auto;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
      }

      .button.is-primary {
        background-color: var(--primary-color);
        border: none;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      }

      .button.is-primary:hover {
        background-color: #e58e19; /* Darker shade of primary */
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
      }
    `,
    ]
})
export class HomeComponent {
  scrollToGallery() {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
