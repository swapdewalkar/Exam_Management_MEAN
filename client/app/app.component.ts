import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <span><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></span>
    <span><a routerLink="/users" routerLinkActive="active">Users</a></span>
    <span><a routerLink="/todo" routerLinkActive="active">To Do List</a></span>
    <span><a routerLink="/login" routerLinkActive="active">Log In</a></span>
    <span><a routerLink="/logout" routerLinkActive="active">Log Out</a></span>
    <span *ngIf="!status"><a routerLink="/register" routerLinkActive="active">Register</a></span>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  title = 'Online Exam Module';
  status:boolean;
  constructor(authService:AuthService){
    status=authService.getStatus();
  }

}
