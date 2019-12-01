import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryoutComponent } from './carryout.component';

describe('CarryoutComponent', () => {
  let component: CarryoutComponent;
  let fixture: ComponentFixture<CarryoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
