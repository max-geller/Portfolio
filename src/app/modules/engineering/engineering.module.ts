import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkillsComponent } from './pages/skills/skills.component';
import { ApproachComponent } from './pages/approach/approach.component';
import { RouterModule } from '@angular/router';
import { EngineeringComponent } from './engineering.component';
import { ExamplesComponent } from './pages/examples/examples.component';

@NgModule({
  declarations: [
    EngineeringComponent,
    ProjectsComponent,
    OverviewComponent,
    GoalsComponent,
    SkillsComponent,
    ApproachComponent,
    ExamplesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, EngineeringRoutingModule],
})
export class EngineeringModule {}
