import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComComponent } from './basic-com.component';

describe('BasicComComponent', () => {
  let component: BasicComComponent;
  let fixture: ComponentFixture<BasicComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
