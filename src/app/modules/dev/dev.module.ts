import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { PortfolioGalleryComponent } from './components/portfolio-gallery/portfolio-gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LanguagesComponent } from './pages/languages/languages.component';
import { LibrariesComponent } from './pages/libraries/libraries.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { DevComponent } from './dev.component';


@NgModule({
  declarations: [OverviewComponent, PortfolioGalleryComponent, LanguagesComponent, LibrariesComponent, GoalsComponent, DevComponent],
  imports: [
    CommonModule,
    SharedModule,
    DevRoutingModule
  ]
})
export class DevModule { }
