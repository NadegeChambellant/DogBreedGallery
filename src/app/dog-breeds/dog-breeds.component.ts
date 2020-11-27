import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreedList, ImageLinks, SubBreedsList } from './breedList.model';
import { DogSearchService } from './dog-search.service';

@Component({
  selector: 'app-dog-breeds',
  templateUrl: './dog-breeds.component.html',
  styleUrls: ['./dog-breeds.component.css'],
})
export class DogBreedsComponent implements OnInit, OnDestroy {
  dogBreedsList?: string[];
  subBreedsList?: string[];
  dogBreedSub!: Subscription;
  subBreedSub!: Subscription;
  selectedBreed?: string;
  selectedSubBreed?: string;
  selectedPicturesList?: string[];

  constructor(private dogSearchService: DogSearchService) {}

  ngOnInit(): void {
     this.getAllDogBreeds();
  }

  getAllDogBreeds(): void{
    this.dogBreedSub = this.dogSearchService
      .getAllBreeds()
      .pipe(
        tap(
          (data: BreedList) => (this.dogBreedsList = Object.keys(data.message))
        )
      )
      .subscribe();
  }

  onChangeBreedSelection(breed: string): void {
    this.reloadSubBreeds(breed);
    this.selectedBreed = breed;
    this.retrievePicturesFromBreed(breed);
  }

  onChangeSubBreedSelection(subBreed: string): void {
    this.selectedSubBreed = subBreed;
    this.retrievePicturesFromSubBreed(subBreed);
  }

  reloadSubBreeds(breed: string): void {
    this.subBreedSub = this.dogSearchService
      .getSubBreedsFromBreed(breed)
      .pipe(
        tap(
          (data: SubBreedsList) =>
            (this.subBreedsList = Object.values(data.message))
        )
      )
      .subscribe();
  }

  retrievePicturesFromBreed(breed: string): void {
    this.subBreedSub = this.dogSearchService
      .getBreedPictures(breed)
      .pipe(
        tap(
          (data: ImageLinks) =>
            (this.selectedPicturesList = Object.values(data.message))
        )
      )
      .subscribe();
  }

  retrievePicturesFromSubBreed(subBreed: string): void {
    if (this.selectedBreed) {
      this.subBreedSub = this.dogSearchService
      .getSubBreedPictures(this.selectedBreed, subBreed)
      .pipe(
        tap(
          (data: ImageLinks) =>
            (this.selectedPicturesList = Object.values(data.message))
        )
      )
      .subscribe();
    }
  }

  ngOnDestroy(): void{
    this.dogBreedSub.unsubscribe();
    this.subBreedSub.unsubscribe();
  }
}
