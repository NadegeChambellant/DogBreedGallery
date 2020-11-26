import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dog-breeds',  // only one page is available on this app, normally it would go to Home
    pathMatch: 'full'
  },
  {
     path: 'dog-breeds',
     loadChildren: () => import('./dog-breeds/dog-breeds.module').then(m => m.DogBreedsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
