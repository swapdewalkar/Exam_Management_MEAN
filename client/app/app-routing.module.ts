import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { UsersComponent }      from './users.component';
import { UserDetailComponent }  from './user-details.component';
import { TaskComponent } from './components/tasks/tasks.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogInComponent }  from './components/account/login.component';
import { LogOutComponent } from './components/account/logout.component';
import { RegisterComponent } from './components/account/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent , canActivate: [AuthGuard] },
  { path: 'detail/:id', component: UserDetailComponent , canActivate: [AuthGuard] },
  { path: 'users',     component: UsersComponent , canActivate: [AuthGuard] },
  { path: 'todo',     component: TaskComponent  , canActivate: [AuthGuard]},
  { path: 'me',     component: ProfileComponent , canActivate: [AuthGuard] },
  { path: 'login',     component: LogInComponent  },
  { path: 'logout',     component: LogOutComponent  },
  { path: 'register',     component: RegisterComponent  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
