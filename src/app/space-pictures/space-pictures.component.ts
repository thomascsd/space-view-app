import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSmartModalService, NgxSmartModalModule } from 'ngx-smart-modal';
import { NasaService } from '../core/services/nasa.service';
import { PictureCardComponet } from '../shared/components/picture-card.component';
import { NasaImageItem } from '../core/models/NasaImageItem';
import { ReadMorePipe } from '../shared/pipes/read-more.pipe';

@Component({
  selector: 'app-space-pictures',
  standalone: true,
  imports: [CommonModule, PictureCardComponet, ReadMorePipe, NgxSmartModalModule],
  template: `<div class="d-flex flex-row flex-wrap justify-content-center">
      <ng-container *ngFor="let item of imageItems">
        <app-picture-card
          [imageSrc]="item.links[0].href"
          [title]="item.data[0].title"
          [description]="item.data[0].description | readMore"
          (click)="openModal(item)"
        ></app-picture-card>
      </ng-container>
    </div>
    <ngx-smart-modal #pictureModal identifier="pictureModal" customClass="modal-content no-padding">
      <ng-container *ngIf="pictureModal.hasData()">
        <div class="modal-header"></div>
        <div class="modal-body">
          <img
            src="{{ pictureModal.getData().href }}"
            class="img-fluid rounded"
            alt=""
            (load)="loadPic()"
          />
        </div>
      </ng-container>
    </ngx-smart-modal>`,
})
export class SpacePicturesComponent implements OnInit {
  constructor(private nasaService: NasaService, private modalService: NgxSmartModalService) {}

  imageItems: NasaImageItem[] = [];

  ngOnInit(): void {
    this.nasaService.getSpacePictures().subscribe((items) => (this.imageItems = items));
  }

  openModal(pic: NasaImageItem) {
    this.modalService.resetModalData('pictureModal');

    this.nasaService.getAsset(pic.data[0].nasa_id).subscribe((assert) => {
      const item = assert.collection.items[0];
      this.modalService.setModalData(item, 'pictureModal');
    });
  }

  loadPic() {
    this.modalService.open('pictureModal');
  }
}
