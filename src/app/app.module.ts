import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { HeaderComponent } from './presentation/shared/layout/header/header.component';
import { NavigationComponent } from './presentation/shared/layout/navigation/navigation.component';
import { FeaturesComponent } from './presentation/features/features.component';
import { AboutComponent } from './presentation/about/about.component';
import { TopBarComponent } from './presentation/shared/layout/top-bar/top-bar.component';
import { LoginComponent } from './presentation/shared/login/login.component';
import { MyWheelsComponent } from './presentation/my-wheels/my-wheels.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    FeaturesComponent,
    AboutComponent,
    TopBarComponent,
    LoginComponent,
    MyWheelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
