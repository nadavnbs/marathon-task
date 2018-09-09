import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonCardComponent } from './marathon-card.component';

describe('MarathonCardComponent', () => {
  let component: MarathonCardComponent;
  let fixture: ComponentFixture<MarathonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarathonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
