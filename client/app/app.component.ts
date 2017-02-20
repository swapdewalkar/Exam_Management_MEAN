import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/users" routerLinkActive="active">Users</a>
    <a routerLink="/todo" routerLinkActive="active">To Do List</a>
    <a routerLink="/me" routerLinkActive="active">My Profile</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Online Exam Module';
}
