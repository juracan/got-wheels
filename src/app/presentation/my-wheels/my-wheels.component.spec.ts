import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWheelsComponent } from './my-wheels.component';

describe('MyWheelsComponent', () => {
  let component: MyWheelsComponent;
  let fixture: ComponentFixture<MyWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWheelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
