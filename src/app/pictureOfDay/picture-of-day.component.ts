import { Component, OnInit, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { DialogService } from '@ngneat/dialog';
import { NasaService } from '../core/services/nasa.service';
import { NasaPictureOfDay } from '../core/models/NasaPictureOfDay';
import { PictureCardComponet } from '../shared/components/picture-card.component';
import { ReadMorePipe } from './../shared/pipes/read-more.pipe';
import { DialogComponent } from '../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-pic-of-day',
  standalone: true,
  imports: [CommonModule, PictureCardComponet, ReadMorePipe],
  template: `<div class="d-flex flex-row flex-wrap justify-content-center">
    <ng-container *ngFor="let pic of pictures()">
      <app-picture-card
        [imageSrc]="pic.url"
        [title]="pic.title"
        [description]="pic.explanation | readMore"
        (click)="openModal(pic)"
      ></app-picture-card>
    </ng-container>
  </div> `,
  styles: [],
})
export class PictureOfDayComponent implements OnInit {
  pictures!: Signal<NasaPictureOfDay[]>;

  constructor(private nasaService: NasaService, private dialogService: DialogService) {
    this.pictures = toSignal(this.nasaService.getPictureOfDay(), { initialValue: [] });
  }

  ngOnInit(): void {}

  openModal(pic: NasaPictureOfDay) {
    this.dialogService.open(DialogComponent, {
      data: {
        title: pic.title,
        url: pic.hdurl,
      },
    });
  }
}
