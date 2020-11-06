import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproachComponent } from './pages/approach/approach.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ToolingComponent } from './pages/tooling/tooling.component';

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
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  },
  {
    path: 'tooling',
    component: ToolingComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'approach',
    component: ApproachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
