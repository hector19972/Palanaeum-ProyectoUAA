import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodigoComponent } from './qrcodigo.component';

describe('QrcodigoComponent', () => {
  let component: QrcodigoComponent;
  let fixture: ComponentFixture<QrcodigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
