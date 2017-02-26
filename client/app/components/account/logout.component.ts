import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
@Component({
    selector: 'logout',
    templateUrl: 'Logging you out.............!'
})
export class LogOutComponent implements OnInit  {

  constructor( private authService:AuthService){
    this.authService.getLogOut();
    
  }

}
