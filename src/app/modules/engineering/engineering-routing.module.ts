import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproachComponent } from './pages/approach/approach.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'goals',
    component: OverviewComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'approach',
    component: ApproachComponent
  },
  {
    path: 'examples',
    component: ExamplesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringRoutingModule { }
