import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickTakerComponent } from './kick-taker.component';

describe('KickTakerComponent', () => {
  let component: KickTakerComponent;
  let fixture: ComponentFixture<KickTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
