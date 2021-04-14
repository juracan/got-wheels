import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWheelsView } from './my-wheels.view';

describe('MyWheelsView', () => {
  let component: MyWheelsView;
  let fixture: ComponentFixture<MyWheelsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWheelsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWheelsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
