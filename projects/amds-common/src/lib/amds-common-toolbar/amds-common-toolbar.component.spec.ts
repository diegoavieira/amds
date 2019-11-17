import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdsCommonToolbarComponent } from './amds-common-toolbar.component';

describe('AmdsCommonToolbarComponent', () => {
  let component: AmdsCommonToolbarComponent;
  let fixture: ComponentFixture<AmdsCommonToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmdsCommonToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdsCommonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
