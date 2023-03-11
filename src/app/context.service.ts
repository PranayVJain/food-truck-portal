import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  adminUser: boolean = false;
  constructor() { }

  setAsAdminUser(){
    this.adminUser = true;
  }

  isAdminUser(){
    return this.adminUser;
  }
}
