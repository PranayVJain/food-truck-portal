import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckContainerComponent } from './food-truck-container.component';

describe('FoodTruckContainerComponent', () => {
  let component: FoodTruckContainerComponent;
  let fixture: ComponentFixture<FoodTruckContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTruckContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTruckContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
