import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FoodTruckService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  addFoodTruck(foodTruck: any) {
    return this.http.post(this.baseUrl + '/v1/foodtrucks', foodTruck);
  }

  updateFoodTruck(foodTruck: any) {
    return this.http.put(this.baseUrl + '/v1/foodtrucks/' + foodTruck.id, foodTruck);
  }

  getAllFoodTrucks(): any {
    return this.http.get(this.baseUrl + '/v1/foodtrucks');
  }


}
