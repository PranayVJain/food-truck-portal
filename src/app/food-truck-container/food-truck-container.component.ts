import { Component, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { AddFoodTruckComponent } from '../dialogs/add-food-truck/add-food-truck.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-food-truck-container',
  templateUrl: './food-truck-container.component.html',
  styleUrls: ['./food-truck-container.component.scss']
})
export class FoodTruckContainerComponent {

  customDateRange: boolean = false;

  constructor(private dialog: MatDialog) { }


  onDateRangeSelected(radio: MatRadioChange) {
    if (radio.value === 'custom') {
      this.customDateRange = true;
    } else {
      this.customDateRange = false;
    }
  }

  openAddFoodTruckDialog() {
    const dialogRef = this.dialog.open(AddFoodTruckComponent, {
       panelClass: "dialog-form-default",
       width: '600px'
    });
  }
}
