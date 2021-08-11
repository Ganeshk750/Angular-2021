import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxResultComponent } from './search-box-result.component';

describe('SearchBoxResultComponent', () => {
  let component: SearchBoxResultComponent;
  let fixture: ComponentFixture<SearchBoxResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
