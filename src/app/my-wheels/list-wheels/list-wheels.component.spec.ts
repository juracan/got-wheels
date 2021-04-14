import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWheelsComponent } from './list-wheels.component';

describe('ListWheelsComponent', () => {
  let component: ListWheelsComponent;
  let fixture: ComponentFixture<ListWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWheelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
