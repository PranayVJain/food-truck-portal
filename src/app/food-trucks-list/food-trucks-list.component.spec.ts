import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTrucksListComponent } from './food-trucks-list.component';

describe('FoodTrucksListComponent', () => {
  let component: FoodTrucksListComponent;
  let fixture: ComponentFixture<FoodTrucksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTrucksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTrucksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
