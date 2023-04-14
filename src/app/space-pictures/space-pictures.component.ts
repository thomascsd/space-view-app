import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../core/services/nasa.service';
import { Observable } from 'rxjs';
import { NasaPictureOfDay } from '../core/models/NasaPictureOfDay';
import { PictureCardComponet } from '../shared/picture-card.component';

@Component({
  selector: 'app-space-pictures',
  standalone: true,
  imports: [CommonModule, PictureCardComponet],
  template: `<div *ngFor="let pic of pictures">
    <app-picture-card [imageSrc]="pic.hdurl" [description]="pic.explanation"></app-picture-card>
  </div>`,
})
export class SpacePicturesComponent implements OnInit {
  constructor(private nasaService: NasaService) {}

  pictures: NasaPictureOfDay[] = [];

  ngOnInit(): void {
    this.nasaService.getPictureOfDay().subscribe((pics) => (this.pictures = pics));
  }
}
