import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPictureComponent } from './random-picture/random-picture.component';
import { MaterialModule } from '../shared/material.module';
import { DogBreedsComponent } from './dog-breeds.component';
import { DogBreedsRoutingModule } from './dog-breeds-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RandomPictureComponent,
    DogBreedsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    DogBreedsRoutingModule
  ],
  exports: [
    DogBreedsComponent
  ],
})
export class DogBreedsModule {}
