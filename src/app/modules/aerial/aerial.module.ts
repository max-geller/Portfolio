import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AerialRoutingModule } from './aerial-routing.module';
import { ArtComponent } from './art/art.component';


@NgModule({
  declarations: [ArtComponent],
  imports: [
    CommonModule,
    AerialRoutingModule
  ]
})
export class AerialModule { }
