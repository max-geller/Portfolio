import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AerialComponent } from './modules/aerial/aerial.component';
import { DevComponent } from './modules/dev/dev.component';
import { EngineeringComponent } from './modules/engineering/engineering.component';
import { TrainingComponent } from './modules/training/training.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },

  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule),
  },
  {
    path: 'engineering',
    loadChildren: () => import('./modules/engineering/engineering.module').then(m => m.EngineeringModule),
    component: EngineeringComponent
  },
  {
    path: 'dev',
    loadChildren: () => import('./modules/dev/dev.module').then(m => m.DevModule),
    component: DevComponent
  },
  {
    path: 'aerial',
    loadChildren: () => import('./modules/aerial/aerial.module').then(m => m.AerialModule),
    component: AerialComponent
  },
  {
    path: 'training',
    loadChildren: () => import('./modules/training/training.module').then(m => m.TrainingModule),
    component: TrainingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
