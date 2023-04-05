import { Component } from '@angular/core';

@Component({
  selector: 'app-foooter',
  standalone: true,
  template: `<footer class="d-flex flex-row justify-content-end">
    <div>
      <a class="social-twitter" href="https://twitter.com/thomascsd">
        <i class="fa fa-twitter"></i>
      </a>
    </div>
  </footer>`,
})
export class FooterComponent {}
