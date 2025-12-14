import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-picture-card',
    imports: [NgOptimizedImage],
    templateUrl: './picture-card.component.html',
    styles: [
        `
      .card {
        height: 100%;
        background-color: var(--card-bg);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;
        border: none;
        display: flex;
        flex-direction: column;
      }

      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
      }

      .card-image {
        position: relative;
        overflow: hidden;
      }

      .card-img-top {
        width: 100%;
        height: 220px;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .card:hover .card-img-top {
        transform: scale(1.05);
      }

      .card-content {
        padding: 1.5rem;
        flex-grow: 1;
        background-color: var(--card-bg);
      }

      .title {
        color: var(--text-light) !important;
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0;
        line-height: 1.4;
      }
    `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureCardComponet {
  imageSrc = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
