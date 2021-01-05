import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntractionComponent } from './component-intraction.component';

describe('ComponentIntractionComponent', () => {
  let component: ComponentIntractionComponent;
  let fixture: ComponentFixture<ComponentIntractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentIntractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIntractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
