import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
