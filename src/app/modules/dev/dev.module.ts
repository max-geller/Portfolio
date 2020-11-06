import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { PortfolioGalleryComponent } from './components/portfolio-gallery/portfolio-gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LanguagesComponent } from './components/languages/languages.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { DevComponent } from './dev.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ToolingComponent } from './pages/tooling/tooling.component';
import { ApproachComponent } from './pages/approach/approach.component';

@NgModule({
  declarations: [
    OverviewComponent,
    PortfolioGalleryComponent,
    LanguagesComponent,
    LibrariesComponent,
    GoalsComponent,
    DevComponent,
    ClientsComponent,
    PortfolioComponent,
    ToolingComponent,
    ApproachComponent,
  ],
  imports: [CommonModule, SharedModule, DevRoutingModule],
})
export class DevModule {}
