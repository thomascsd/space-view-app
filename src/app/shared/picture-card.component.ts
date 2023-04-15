import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  standalone: true,
  template: ` <div class="card">
    <img src="{{ imageSrc }}" class="card-img-top" alt="{{ title }}" />
    <div class="card-body">
      <h2 class="card-title fs-4">{{ title }}</h2>
      <p class="card-text fs-5">{{ description }}</p>
    </div>
  </div>`,
  styles: [
    `
      .card {
        width: 18rem;
        margin: 1rem;
        box-shadow: 0px 0px 5px #ccc;
        transition: all 0.3s ease;
      }

      .card:hover {
        box-shadow: 0px 0px 10px #aaa;
      }

      .card-img-top {
        height: 200px;
        object-fit: cover;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureCardComponet {
  @Input() imageSrc = '';
  @Input() title = '';
  @Input() description = '';
}
