import { AfterViewInit, Component, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Foodtruck } from '../models/foodtruck';
import { MatDialog } from '@angular/material/dialog';
import { AddFoodTruckComponent } from '../dialogs/add-food-truck/add-food-truck.component';
import { FoodTruckService } from '../service/food-truck.service';

@Component({
  selector: 'app-food-trucks-list',
  templateUrl: './food-trucks-list.component.html',
  styleUrls: ['./food-trucks-list.component.scss']
})
export class FoodTrucksListComponent {
  displayedColumns: string[] = ['name', 'description', 'availableDate', 'edit'];
  dataSource = new MatTableDataSource<any>();

  @Input('foodTruckList') foodTruckList: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private foodTruckService: FoodTruckService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = this.foodTruckList;
  }

  onEditRow(row: any) {
    const dialogRef = this.dialog.open(AddFoodTruckComponent, {
      panelClass: "dialog-form-default",
      width: '600px',
      data: row,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.foodTruckService.getAllFoodTrucks().subscribe((response: any) => {
        this.dataSource.data =  response;
     });
    });

  }

}
