import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomsComponent } from 'src/app/modules/aerial/pages/customs/customs.component';
import { StockComponent } from './pages/stock/stock.component';
import { ArtComponent } from './pages/art/art.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { FpvComponent } from './pages/fpv/fpv.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { OverviewComponent } from './pages/overview/overview.component';

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
    path: 'fpv',
    component: FpvComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
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
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'customs',
    component: CustomsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerialRoutingModule {}
