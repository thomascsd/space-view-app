import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../core/services/nasa.service';
import { NasaPictureOfDay } from '../core/models/NasaPictureOfDay';
import { PictureCardComponet } from '../shared/picture-card.component';

@Component({
  selector: 'app-pic-of-day',
  standalone: true,
  imports: [CommonModule, PictureCardComponet],
  template: `<div class="d-flex flex-row flex-wrap justify-content-center">
    <<ng-container *ngFor="let pic of pictures">
      <app-picture-card
        [imageSrc]="pic.url"
        [title]="pic.title"
        [description]="pic.explanation"
      ></app-picture-card>
    </ng-container>
  </div>`,
})
export class PictureOfDayComponent implements OnInit {
  constructor(private nasaService: NasaService) {}

  pictures: NasaPictureOfDay[] = [];

  ngOnInit(): void {
    this.nasaService.getPictureOfDay().subscribe((pics) => (this.pictures = pics));
  }
}
