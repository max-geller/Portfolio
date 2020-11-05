import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
