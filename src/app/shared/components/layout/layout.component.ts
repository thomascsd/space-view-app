import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './layout.component.html',
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
