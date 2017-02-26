import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }   from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import {TaskService} from './services/task.service'
import { UserService } from './user.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { UserDetailComponent } from './user-details.component';
import { UsersComponent } from './users.component';
import { TaskComponent } from './components/tasks/tasks.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogInComponent }  from './components/account/login.component';
import { LogOutComponent } from './components/account/logout.component';
import { RegisterComponent } from './components/account/register.component';

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
    ProfileComponent,
    LogInComponent,
    LogOutComponent,
    RegisterComponent
  ],
  providers: [
    UserService,
    TaskService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
