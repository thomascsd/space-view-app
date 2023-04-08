import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout.component';
import { PictureOfDayComponent } from './pictureOfDay/picture-of-day.component';
import { SpacePicturesComponent } from './space-pictures/space-pictures.component';

const routes: Routes = [
  { path: '', redirectTo: 'pictureOfDay', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'pictureOfDay', component: PictureOfDayComponent },
      { path: 'spacePictures', component: SpacePicturesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
