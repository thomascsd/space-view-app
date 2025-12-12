import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styles: [
    `
      .footer.custom-footer {
        background-color: #162032; /* Slightly darker than main bg */
        color: var(--text-light);
        padding: 4rem 1.5rem;
        margin-top: 4rem;
      }

      .fa-circle {
        color: var(--card-bg);
        transition: color 0.3s ease;
      }

      a:hover .fa-circle {
        color: var(--primary-color);
      }

      strong {
        color: var(--primary-color);
      }

      p {
        color: var(--text-light);
        opacity: 0.8;
      }
    `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
