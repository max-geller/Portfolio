import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AerialRoutingModule } from './aerial-routing.module';
import { ArtComponent } from './pages/art/art.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AerialComponent } from './aerial.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AerialComponent, ArtComponent, OverviewComponent, GoalsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AerialRoutingModule
  ]
})
export class AerialModule { }
