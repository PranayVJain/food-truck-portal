import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  currentUser: User;

  constructor() { }

  setUser(user: User){
    this.currentUser = user;
  }

  getUser(){
    return this.currentUser;
  }
}
