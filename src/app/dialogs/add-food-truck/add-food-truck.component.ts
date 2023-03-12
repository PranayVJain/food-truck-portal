import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ContextService } from 'src/app/context.service';
import { Foodtruck } from 'src/app/models/foodtruck';
import { FoodTruckService } from 'src/app/service/food-truck.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-food-truck',
  templateUrl: './add-food-truck.component.html',
  styleUrls: ['./add-food-truck.component.scss']
})
export class AddFoodTruckComponent implements OnInit {
  progress: boolean = false;
  disableButton: boolean = false
  name: string;
  description: string;
  date: string;
  form: UntypedFormGroup;
 

  constructor(public dialogRef: MatDialogRef<AddFoodTruckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Foodtruck, 
    private contextService: ContextService, 
    private formBuilder: UntypedFormBuilder, 
    private foodTruckSvc: FoodTruckService
    ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const datepipe = new DatePipe('en-US');
    this.form = this.formBuilder.group({
      name: [this.data ? this.data.name : '', [Validators.required]],
      description: [this.data ? this.data.description : '', [Validators.required]],
      date: [this.data ? datepipe.transform(this.data.date, 'dd/MM/yyyy') : '', [Validators.required]]
    })

  }
  cancel() {  }

  addFoodTruck() {

    this.foodTruckSvc.addFoodTruck({   
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      availableDate: this.form.get('date').value,
    }).subscribe(data => {
      console.log(`Response ${data}`);
    }, err => {
      console.log(`Response ${err}`);
    },()=>{
      this.dialogRef.close();
    });

  }


  updateFoodTruck() {
    this.foodTruckSvc.updateFoodTruck({
      id: this.data.id,
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      availableDate: this.form.get('date').value,
    }).subscribe(data => {
      console.log(`Response ${data}`);
    }, err => {
      console.log(`Response ${err}`);
    },()=>{
      this.dialogRef.close();
    });

  }

  save() {
    if (this.data) {
      this.updateFoodTruck();
    } else {
      this.addFoodTruck();
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
}
