import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevComponent } from './modules/dev/dev.component';
import { BioComponent } from './pages/bio/bio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'engineering',
    loadChildren: () => import('./modules/engineering/engineering.module').then(m => m.EngineeringModule),
  },
  {
    path: 'dev',
    loadChildren: () => import('./modules/dev/dev.module').then(m => m.DevModule),
    component: DevComponent
  },
  {
    path: 'aerial',
    loadChildren: () => import('./modules/aerial/aerial.module').then(m => m.AerialModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }