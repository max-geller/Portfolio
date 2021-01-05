import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccomplishmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
