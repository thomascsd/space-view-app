import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NasaPictureOfDay } from '../models/NasaPictureOfDay';
import { NasaImage } from '../models/NasaImage';
import { NasaAsset } from '../models/NasaAsset';

const url = '';

@Injectable({
  providedIn: 'root',
})
export class NasaServiceService {
  constructor(private client: HttpClient) {}

  getPictureOfDay(): Observable<NasaPictureOfDay[]> {
    return this.client.get<NasaPictureOfDay[]>(`${url}/api/nasa/pictureOfDay`);
  }

  getSpacePictures(): Observable<NasaImage[]> {
    return this.client.get<NasaImage[]>(`${url}/api/nasa/spacePictures`);
  }

  getAsset(nasaId: string): Observable<NasaAsset> {
    return this.client.get<NasaAsset>(`${url}/api/nasa/asset/${nasaId}`);
  }
}
