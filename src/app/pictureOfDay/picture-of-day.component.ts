import { Component, OnInit, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { DialogService } from '@ngneat/dialog';
import { NasaService } from '../core/services/nasa.service';
import { NasaPictureOfDay } from '../core/models/NasaPictureOfDay';
import { PictureCardComponet } from '../shared/components/picture-card/picture-card.component';
import { ReadMorePipe } from './../shared/pipes/read-more.pipe';
import { DialogComponent } from '../shared/components/dialog/dialog.component';

@Component({
    selector: 'app-pic-of-day',
    imports: [CommonModule, PictureCardComponet, ReadMorePipe],
    templateUrl: './picture-of-day.component.html',
    styles: []
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
