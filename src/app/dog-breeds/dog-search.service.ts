import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BreedList, SubBreedsList, ImageLinks } from './breedList.model';

@Injectable({
  providedIn: 'root'
})
export class DogSearchService {

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<BreedList> {
    return this.http.get<BreedList>('https://dog.ceo/api/breeds/list/all');
  }

  getSubBreedsFromBreed(breed: string): Observable<SubBreedsList> {
    return this.http.get<SubBreedsList>(`https://dog.ceo/api/breed/${breed}/list`);
  }

  getBreedPictures(breed: string): Observable<ImageLinks> {
    return this.http.get<ImageLinks>(`https://dog.ceo/api/breed/${breed}/images`);
  }

  getSubBreedPictures(breed: string, subBreed: string): Observable<ImageLinks> {
    return this.http.get<ImageLinks>(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`);
  }

}

