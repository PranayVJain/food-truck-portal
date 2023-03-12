import { Injectable } from '@angular/core';
import { User } from './models/user';
import { UserType } from './models/user-type';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private currentUser: User;
  private isLogedIn: boolean;

  constructor() { }

  setUser(user: User){
    this.currentUser = user;
  }

  getUser(){
    return this.currentUser;
  }

  isUserLogged(): boolean {
    return this.isLogedIn;
  }

  setIsUserLoggedIn(isLoggedIn: boolean){
    this.isLogedIn = isLoggedIn;
  }

  isAdmin(): boolean {
    let isAdminLocal: boolean = false;
    if(this.currentUser){
      isAdminLocal = this.currentUser.type === UserType.ADMIN;
    }
    return isAdminLocal;
  }

}
