import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
