import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FwModule } from "fw/fw.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from "app/app.routing";
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { RegisterUserComponent } from "fw/users/register-user/register-user.component";
import { UserService } from "app/services/user.service";
import { UserApi } from "fw/users/user-api";
import { AuthGuard } from "app/services/auth-guard.service";
import { AppDataService } from "app/services/app-data.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    {provide: UserApi, useExisting: UserService},
    AuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
