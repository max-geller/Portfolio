import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagsComponent } from './bhags.component';

describe('BhagsComponent', () => {
  let component: BhagsComponent;
  let fixture: ComponentFixture<BhagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
