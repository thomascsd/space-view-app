import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../core/services/nasa.service';
import { NasaPictureOfDay } from '../core/models/NasaPictureOfDay';
import { PictureCardComponet } from '../shared/components/picture-card.component';
import { ReadMorePipe } from './../shared/pipes/read-more.pipe';
import { NgxSmartModalService, NgxSmartModalModule } from 'ngx-smart-modal';

@Component({
  selector: 'app-pic-of-day',
  standalone: true,
  imports: [CommonModule, PictureCardComponet, ReadMorePipe, NgxSmartModalModule],
  template: `<div class="d-flex flex-row flex-wrap justify-content-center">
      <ng-container *ngFor="let pic of pictures">
        <app-picture-card
          [imageSrc]="pic.url"
          [title]="pic.title"
          [description]="pic.explanation | readMore"
          (click)="openModal(pic)"
        ></app-picture-card>
      </ng-container>
    </div>
    <ngx-smart-modal #pictureModal identifier="pictureModal" customClass="modal-content no-padding">
      <ng-container *ngIf="pictureModal.hasData()">
        <div class="modal-header">
          <h5 class="modal-title">{{ pictureModal.getData().title }}</h5>
        </div>
        <div class="modal-body">
          <img
            src="{{ pictureModal.getData().hdurl }}"
            class="img-fluid rounded"
            alt="{{ pictureModal.getData().title }}"
            (load)="loadPic()"
          />
        </div>
      </ng-container>
    </ngx-smart-modal> `,
  styles: [],
})
export class PictureOfDayComponent implements OnInit {
  constructor(private nasaService: NasaService, private modalService: NgxSmartModalService) {}

  pictures: NasaPictureOfDay[] = [];

  ngOnInit(): void {
    this.nasaService.getPictureOfDay().subscribe((pics) => (this.pictures = pics));
  }

  openModal(pic: NasaPictureOfDay) {
    this.modalService.resetModalData('pictureModal');
    this.modalService.setModalData(pic, 'pictureModal');
  }

  loadPic() {
    this.modalService.open('pictureModal');
  }
}
