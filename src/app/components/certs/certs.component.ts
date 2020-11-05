import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
