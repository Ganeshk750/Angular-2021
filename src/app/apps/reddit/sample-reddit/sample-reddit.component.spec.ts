import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRedditComponent } from './sample-reddit.component';

describe('SampleRedditComponent', () => {
  let component: SampleRedditComponent;
  let fixture: ComponentFixture<SampleRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
