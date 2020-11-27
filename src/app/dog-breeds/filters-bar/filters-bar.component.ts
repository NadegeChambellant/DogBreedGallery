import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { BreedList, SubBreedsList } from '../breedList.model';
import { DogSearchService } from '../dog-search.service';

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.css'],
})
export class FiltersBarComponent implements OnInit, OnDestroy {
  @Input() breedsList?: string[];
  @Input() subBreedsList?: string[];
  @Output() selectedBreed: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedSubBreed: EventEmitter<string> = new EventEmitter<string>();

  subBreedSubscription!: Subscription;
  breedSubscription!: Subscription;
  filteredOptions?: Observable<string[]>;
  breed = new FormControl();
  subBreed = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.breed.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  areSubBreedsAvailable(): boolean {
    return Boolean(this.subBreedsList?.length);
  }

  onSelectedBreed(breed: string): void {
    this.selectedBreed.emit(breed);
  }

  onSelectedSubBreed(subBreed: string): void {
    this.selectedSubBreed.emit(subBreed);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.breedsList){
      return this.breedsList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    return [];
  }

  ngOnDestroy(): void {

  }
}
