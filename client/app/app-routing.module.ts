import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { UsersComponent }      from './users.component';
import { UserDetailComponent }  from './user-details.component';
import { TaskComponent } from './components/tasks/tasks.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'todo',     component: TaskComponent  },
  { path: 'me',     component: ProfileComponent  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
