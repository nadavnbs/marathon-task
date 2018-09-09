import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMarathonsComponent } from './all-marathons.component';

describe('AllMarathonsComponent', () => {
  let component: AllMarathonsComponent;
  let fixture: ComponentFixture<AllMarathonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMarathonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMarathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
