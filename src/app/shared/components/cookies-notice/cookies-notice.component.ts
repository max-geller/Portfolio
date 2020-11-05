import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cookies-notice',
  templateUrl: './cookies-notice.component.html',
  styleUrls: ['./cookies-notice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiesNoticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
