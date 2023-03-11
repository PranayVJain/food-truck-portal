import { Component, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { AddFoodTruckComponent } from '../dialogs/add-food-truck/add-food-truck.component';
import { MatDialog } from '@angular/material/dialog';
import { FoodTruckService } from '../service/food-truck.service';
import { Foodtruck } from '../models/foodtruck';

@Component({
  selector: 'app-food-truck-container',
  templateUrl: './food-truck-container.component.html',
  styleUrls: ['./food-truck-container.component.scss']
})
export class FoodTruckContainerComponent {

  customDateRange: boolean = false;
  foodTruckList: Foodtruck[] = [];

  constructor(private dialog: MatDialog, private foodTruckService: FoodTruckService) { }


  onDateRangeSelected(radio: MatRadioChange) {
    if (radio.value === 'custom') {
      this.customDateRange = true;
    } else {
      this.foodTruckService.getAllFoodTrucks().subscribe((response: any) => {
         console.log(response);
         this.foodTruckList = response;
      });
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
