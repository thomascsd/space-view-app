import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-picture-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './picture-card.component.html',
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
  imageSrc = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
