import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { SettingsComponent } from "app/settings/settings.component";
import { CountryListComponent } from "app/country-list/country-list.component";
import { CountryDetailComponent } from "app/country-detail/country-detail.component";
import { CountryMaintComponent } from "app/country-maint/country-maint.component";
import { AuthenticatedUserComponent } from "app/authenticated-user/authenticated-user.component";
import { SignInComponent } from "fw/users/sign-in/sign-in.component";
import { RegisterUserComponent } from "fw/users/register-user/register-user.component";
import { AuthGuard } from './services/auth-guard.service';


export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  {
    path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', canActivateChild: [AuthGuard],
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'coutry-list/:count', component: CountryListComponent },
          { path: 'country-detail/:country', component: CountryDetailComponent },
          { path: 'country-maint', component: CountryMaintComponent },
          { path: 'settings', component: SettingsComponent },
        ]
      }
    ]
  },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent },
];
