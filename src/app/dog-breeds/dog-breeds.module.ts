import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPictureComponent } from './random-picture/random-picture.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    RandomPictureComponent
  ],
  imports: [
    CommonModule,
    MaterialModule],
  exports: [
    RandomPictureComponent
  ],
})
export class DogBreedsModule {}
