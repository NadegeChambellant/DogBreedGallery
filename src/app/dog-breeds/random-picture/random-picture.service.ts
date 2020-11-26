import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from './picture.model';

@Injectable({
  providedIn: 'root',
})
export class RandomPictureService {
  constructor(private http: HttpClient) {}

  getPicture(): Observable<Picture> {
    return this.http.get<Picture>('https://dog.ceo/api/breeds/image/random');
  }
}
