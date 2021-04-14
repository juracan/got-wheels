import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWheelsComponent } from './add-wheels.component';

describe('AddWheelsComponent', () => {
  let component: AddWheelsComponent;
  let fixture: ComponentFixture<AddWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWheelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
