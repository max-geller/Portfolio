import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './pages/feed/feed.component';
import { DetailsComponent } from './pages/details/details.component';
import { GalleryRoutes } from './gallery.routes';



@NgModule({
  declarations: [
    FeedComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutes
  ]
})
export class GalleryModule { }
