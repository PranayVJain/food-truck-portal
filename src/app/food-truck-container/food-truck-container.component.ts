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
  customDate: Date;
  constructor(private dialog: MatDialog,
    private foodTruckService: FoodTruckService,
    private contextService: ContextService) { }

  ngOnInit() {
    this.getFoodTruckForToday();
    if (this.contextService.isAdmin()) {
      this.isAdmin = true;
    }
  }
  
  /**
   * Makes API call to get all foor trucks by date range
   * @param start 
   * @param end 
   */
  getFoodTrucks(start: Date, end: Date) {
    this.foodTruckService.getAllFoodTrucksByTimeRange(start, end).subscribe((response: any) => {
      this.foodTruckList = response;
      console.log(response);
    });
  }
  
  /**
   * Gets called when user selects date by selecting custom option in radio buttons
   * @param radio 
   */
  onDateRangeSelected(radio: MatRadioChange) {
    if (radio.value === 'custom') {
      this.customDateRange = true;
    } else {
      this.getFoodTruckForToday();
      this.customDateRange = false;
    }
  }
  
  /**
   * Gets called when user selects today option in radio button
   */
  getFoodTruckForToday(){
    let start = new Date();
    console.log(start)
    start.setHours(0,0,0,0);
    let end = new Date();
    end.setHours(23,59,59,59);
    this.getFoodTrucks(start, end);
  }
  
  /**
   * Gets called when user selects custom date from datepicker
   */
  onCustomDateSelected(){
    let start = this.customDate;
    console.log(start);
    start.setHours(0,0,0,0);
    let end = new Date(this.customDate);
    end.setHours(23,59,59,59);
    this.getFoodTrucks(start, end);
  }

  /**
   * Gets called when user clicks on Add food truck button in UI
   */
  openAddFoodTruckDialog() {
    const dialogRef = this.dialog.open(AddFoodTruckComponent, {
      panelClass: "dialog-form-default",
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(this.customDateRange){
        this.onCustomDateSelected();
      }else{
        this.getFoodTruckForToday();
      }
    });
  }
}
