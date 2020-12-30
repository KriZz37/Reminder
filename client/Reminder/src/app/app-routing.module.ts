import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewReminderComponent } from './new-reminder/new-reminder.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: SidenavComponent,
        children: [
          {path: '', component: DashboardComponent},
          {path: 'new-reminder', component: NewReminderComponent},
          {path: 'account', component: AccountComponent},
        ]
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
