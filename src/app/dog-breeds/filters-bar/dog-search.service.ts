import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreedList, SubBreedsList } from './breedList.model';

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
}

