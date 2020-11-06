import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './pages/art/art.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { FpvComponent } from './pages/fpv/fpv.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'goals',
    component: GoalsComponent,
  },
  {
    path: 'fpv',
    component: FpvComponent,
  },
  {
    path: 'art',
    component: ArtComponent,
  },
  {
    path: 'fleet',
    component: FleetComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerialRoutingModule {}
