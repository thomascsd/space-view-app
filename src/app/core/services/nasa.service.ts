import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NasaPictureOfDay } from '../models/NasaPictureOfDay';
import { NasaImageItem } from '../models/NasaImageItem';
import { NasaAsset } from '../models/NasaAsset';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private client: HttpClient) {}

  getPictureOfDay(): Observable<NasaPictureOfDay[]> {
    return this.client.get<NasaPictureOfDay[]>(`${url}/api/nasa/pictureOfDay`);
  }

  getSpacePictures(): Observable<NasaImageItem[]> {
    return this.client.get<NasaImageItem[]>(`${url}/api/nasa/spacePictures`);
  }

  getAsset(nasaId: string): Observable<NasaAsset> {
    return this.client.get<NasaAsset>(`${url}/api/nasa/asset/${nasaId}`);
  }
}
