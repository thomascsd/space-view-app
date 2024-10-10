import { Component, AfterViewInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PictureOfDayComponent } from './pictureOfDay/picture-of-day.component';
import { SpacePicturesComponent } from './space-pictures/space-pictures.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HomeComponent, PictureOfDayComponent, SpacePicturesComponent, FooterComponent],
})
export class AppComponent implements AfterViewInit {
  title = 'space-view-app';

  ngAfterViewInit(): void {}
}
