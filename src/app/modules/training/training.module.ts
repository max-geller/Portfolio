import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutes } from './training.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TrainingComponent } from './training.component';
import { OverviewComponent } from './pages/overview/overview.component';

@NgModule({
  declarations: [TrainingComponent, OverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TrainingRoutes
  ],
})
export class TrainingModule {}
