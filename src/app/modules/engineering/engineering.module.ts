import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProjectsComponent, OverviewComponent, GoalsComponent],
  imports: [
    CommonModule,
    SharedModule,
    EngineeringRoutingModule
  ]
})
export class EngineeringModule { }
