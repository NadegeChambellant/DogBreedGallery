import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogBreedsComponent } from './dog-breeds.component';

const routes: Routes = [
    {
        path: '',
        component: DogBreedsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogBreedsRoutingModule { }
