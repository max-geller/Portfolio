import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { FeedComponent } from './pages/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'detail',
    component: DetailsComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutes { }
