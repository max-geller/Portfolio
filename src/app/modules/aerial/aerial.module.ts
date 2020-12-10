import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AerialRoutingModule } from './aerial-routing.module';
import { ArtComponent } from './pages/art/art.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AerialComponent } from './aerial.component';
import { RouterModule } from '@angular/router';
import { FleetComponent } from './pages/fleet/fleet.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FpvComponent } from './pages/fpv/fpv.component';
import { StockComponent } from './pages/stock/stock.component';
import { CustomsComponent } from './pages/customs/customs.component';

@NgModule({
  declarations: [
    AerialComponent,
    ArtComponent,
    OverviewComponent,
    FleetComponent,
    GalleryComponent,
    FpvComponent,
    StockComponent,
    CustomsComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule, AerialRoutingModule],
})
export class AerialModule {}
