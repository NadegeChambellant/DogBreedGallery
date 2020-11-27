import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPictureComponent } from './random-picture/random-picture.component';
import { MaterialModule } from '../shared/material.module';
import { DogBreedsComponent } from './dog-breeds.component';
import { DogBreedsRoutingModule } from './dog-breeds-routing.module';
import { RouterModule } from '@angular/router';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DogsGalleryComponent } from './dogs-gallery/dogs-gallery.component';

@NgModule({
  declarations: [
    RandomPictureComponent,
    DogBreedsComponent,
    FiltersBarComponent,
    DogsGalleryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    DogBreedsRoutingModule
  ],
  exports: [
    DogBreedsComponent
  ],
})
export class DogBreedsModule {}
