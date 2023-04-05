import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: '',
  standalone: true,
  template: ` <div class="card" style="width: 18rem;">
    <img src="{{ imageSrc }}" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ description }}
      </p>
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureCardComponet {
  @Input() imageSrc = '';
  @Input() description = '';
}
