import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPipeComponent } from './payment-pipe.component';

describe('PaymentPipeComponent', () => {
  let component: PaymentPipeComponent;
  let fixture: ComponentFixture<PaymentPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
