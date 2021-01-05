import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
