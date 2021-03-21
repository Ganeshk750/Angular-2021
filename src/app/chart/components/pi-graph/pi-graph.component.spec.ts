import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiGraphComponent } from './pi-graph.component';

describe('PiGraphComponent', () => {
  let component: PiGraphComponent;
  let fixture: ComponentFixture<PiGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
