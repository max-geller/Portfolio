import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    EngineeringRoutingModule
  ]
})
export class EngineeringModule { }
