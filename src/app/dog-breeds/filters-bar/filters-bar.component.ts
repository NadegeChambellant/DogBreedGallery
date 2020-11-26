import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { BreedList, SubBreedsList } from './breedList.model';
import { DogSearchService } from './dog-search.service';

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.css'],
})
export class FiltersBarComponent implements OnInit, OnDestroy {
  dogBreedSub!: Subscription;
  subBreedSub!: Subscription;
  dogBreedsList?: string[];
  filteredOptions?: Observable<string[]>;
  subBreedsList?: string[];
  breed = new FormControl();

  constructor(private dogSearchService: DogSearchService, fb: FormBuilder) {}

  ngOnInit(): void {
    this.dogBreedSub = this.dogSearchService
      .getAllBreeds()
      .pipe(
        tap(
          (data: BreedList) => (this.dogBreedsList = Object.keys(data.message))
        )
      )
      .subscribe();

    this.filteredOptions = this.breed.valueChanges.pipe(
      startWith(''),
      map((breed) => this._filter(breed))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.dogBreedsList) {
      return this.dogBreedsList.filter(
        (option) => option.toLowerCase().indexOf(filterValue) === 0
      );
    }
    return [];
  }

  reloadSubBreeds(): void {
    this.subBreedSub = this.dogSearchService
      .getSubBreedsFromBreed(this.breed.value)
      .pipe(
        tap(
          (data: SubBreedsList) =>
            (this.subBreedsList = Object.values(data.message))
        )
      )
      .subscribe();
  }

  areSubBreedsAvailable(): boolean {
    return Boolean(this.subBreedsList?.length);
  }

  ngOnDestroy(): void {
    this.dogBreedSub.unsubscribe();
    this.subBreedSub.unsubscribe();
  }
}
