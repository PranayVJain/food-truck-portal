import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { AddFoodTruckComponent } from '../dialogs/add-food-truck/add-food-truck.component';
import { MatDialog } from '@angular/material/dialog';
import { FoodTruckService } from '../service/food-truck.service';
import { Foodtruck } from '../models/foodtruck';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-food-truck-container',
  templateUrl: './food-truck-container.component.html',
  styleUrls: ['./food-truck-container.component.scss']
})
export class FoodTruckContainerComponent {

  customDateRange: boolean = false;
  foodTruckList: Foodtruck[] = [];
  isAdmin: boolean = false;

  constructor(private dialog: MatDialog,
    private foodTruckService: FoodTruckService,
    private contextService: ContextService) { }

  ngOnInit() {
    this.getFoodTrucks();
    if (this.contextService.isAdmin()) {
      this.isAdmin = true;
    }
  }

  getFoodTrucks() {
    this.foodTruckService.getAllFoodTrucks().subscribe((response: any) => {
      this.foodTruckList = response;
      console.log(response);
    });
  }

  onDateRangeSelected(radio: MatRadioChange) {
    if (radio.value === 'custom') {
      this.customDateRange = true;
    } else {
      this.getFoodTrucks();
      this.customDateRange = false;
    }
  }

  openAddFoodTruckDialog() {
    const dialogRef = this.dialog.open(AddFoodTruckComponent, {
      panelClass: "dialog-form-default",
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.foodTruckService.getAllFoodTrucks().subscribe((response: any) => {
        this.foodTruckList = response;
      });
    });
  }
}
