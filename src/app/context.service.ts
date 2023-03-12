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

  /**
   * Sets information of logged in user
   * @param user {User}
   */
  setUser(user: User): void {
    this.currentUser = user;
  }
  
  /**
   * Returns loggedin user info
   * @returns logged in user info
   */
  getUser(): User {
    return this.currentUser;
  }
  
  /**
   * Returns if user is loggedin or not
   * @returns {boolean}
   */
  isUserLogged(): boolean {
    return this.isLogedIn;
  }
  
  /**
   * Sets if user is logged in or not
   * @param isLoggedIn {boolean}
   */
  setIsUserLoggedIn(isLoggedIn: boolean) {
    this.isLogedIn = isLoggedIn;
  }
  
  /**
   * Checks if logged in user is Admin or not
   * @returns {boolean}
   */
  isAdmin(): boolean {
    let isAdminLocal: boolean = false;
    if (this.currentUser) {
      isAdminLocal = this.currentUser.type === UserType.ADMIN;
    }
    return isAdminLocal;
  }

}
