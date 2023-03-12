import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    userName: string;
    constructor(public contextService: ContextService, private router: Router){};

    ngOnInit(){
      if(!this.contextService.isUserLogged()){
         this.router.navigate(["login"])
      }else{
        this.userName = this.contextService.getUser().name;
      }
    }
}
