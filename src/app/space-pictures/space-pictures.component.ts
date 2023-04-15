import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../core/services/nasa.service';
import { PictureCardComponet } from '../shared/picture-card.component';
import { NasaImageItem } from '../core/models/NasaImageItem';

@Component({
  selector: 'app-space-pictures',
  standalone: true,
  imports: [CommonModule, PictureCardComponet],
  template: `<div class="d-flex flex-row flex-wrap justify-content-center">
    <<ng-container *ngFor="let item of imageItems">
      <app-picture-card
        [imageSrc]="item.links[0].href"
        [title]="item.data[0].title"
        [description]="item.data[0].description"
      ></app-picture-card>
    </ng-container>
  </div>`,
})
export class SpacePicturesComponent implements OnInit {
  constructor(private nasaService: NasaService) {}

  imageItems: NasaImageItem[] = [];

  ngOnInit(): void {
    this.nasaService.getSpacePictures().subscribe((items) => (this.imageItems = items));
  }
}