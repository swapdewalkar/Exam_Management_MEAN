import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }   from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import {TaskService} from './services/task.service'
import { UserService } from './user.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { UserDetailComponent } from './user-details.component';
import { UsersComponent } from './users.component';
import { TaskComponent } from './components/tasks/tasks.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    TaskComponent,
    ProfileComponent
  ],
  providers: [
    UserService,
    TaskService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
