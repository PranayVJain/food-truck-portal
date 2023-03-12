import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodtruck } from '../models/foodtruck';

/**
 * Class to call food truck APIs
 */
@Injectable({
  providedIn: 'root'
})
export class FoodTruckService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  /**
   * Add a new food truck
   * @param foodTruck 
   * @returns observable
   */
  addFoodTruck(foodTruck: Foodtruck): Observable<any> {
    return this.http.post(`${this.baseUrl}/v1/foodtrucks`, foodTruck);
  }
  
  /**
   * Updates existing food truck
   * @param foodTruck {Foodtruck}
   * @returns observable
   */
  updateFoodTruck(foodTruck: Foodtruck) {
    return this.http.put(`${this.baseUrl}/v1/foodtrucks/${foodTruck.id}`, foodTruck);
  }

  /**
   * Get all food trucks
   * @returns all food trucks
   */
  getAllFoodTrucks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v1/foodtrucks`);
  }

  /**
   * Get all food truck by date range
   * @param fromDate start date
   * @param toDate end date
   * @returns list of all food trucks by date range
   */
  getAllFoodTrucksByTimeRange(fromDate: Date, toDate: Date): Observable<any> {
    const params = new HttpParams()
      .set('fromDate', fromDate.toISOString())
      .set('toDate', toDate.toISOString());
    return this.http.get(`${this.baseUrl}/v1/foodtrucks`, { params });
  }
}
