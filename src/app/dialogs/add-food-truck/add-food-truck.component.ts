import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ContextService } from 'src/app/context.service';

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
  constructor(private contextService: ContextService, private formBuilder: UntypedFormBuilder) {
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]]
    })

  }
  cancel() { }

  save() { }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
}
