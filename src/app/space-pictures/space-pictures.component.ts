import { Component, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { NasaService } from '../core/services/nasa.service';
import { PictureCardComponet } from '../shared/components/picture-card.component';
import { NasaImageItem } from '../core/models/NasaImageItem';
import { ReadMorePipe } from '../shared/pipes/read-more.pipe';

@Component({
  selector: 'app-space-pictures',
  standalone: true,
  imports: [CommonModule, PictureCardComponet, ReadMorePipe],
  template: `<div class="d-flex flex-row flex-wrap justify-content-center">
    <ng-container *ngFor="let item of imageItems()">
      <app-picture-card
        [imageSrc]="item.links[0].href"
        [title]="item.data[0].title"
        [description]="item.data[0].description | readMore"
        (click)="openModal(item)"
      ></app-picture-card>
    </ng-container>
  </div> `,
})
export class SpacePicturesComponent implements OnInit {
  constructor(private nasaService: NasaService) {}

  imageItems!: Signal<NasaImageItem[]>;

  ngOnInit(): void {
    this.imageItems = toSignal(this.nasaService.getSpacePictures(), { initialValue: [] });
  }

  openModal(pic: NasaImageItem) {
    this.nasaService.getAsset(pic.data[0].nasa_id).subscribe((assert) => {
      const item = assert.collection.items[0];
    });
  }

  loadPic() {}
}
