import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
@Component({
    selector: 'logout',
    template: 'Logging you out.............!'
})
export class LogOutComponent implements OnInit  {

  constructor( private authService:AuthService,private router:Router){
    this.authService.getLogOut().subscribe(res=> this.router.navigate(['/login']));
  }
}
