import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { HeaderComponent } from './presentation/layout/header/header.component';
import { NavigationComponent } from './presentation/layout/navigation/navigation.component';
import { FeaturesComponent } from './presentation/features/features.component';
import { AboutComponent } from './presentation/about/about.component';
import { TopBarComponent } from './presentation/layout/top-bar/top-bar.component';
import { MyWheelsComponent } from './presentation/my-wheels/my-wheels.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './presentation/components/login/login.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    FeaturesComponent,
    AboutComponent,
    TopBarComponent,
    MyWheelsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     coreLibraryLoader: () => import('highlight.js/lib/highlight'),
    //     languages: {
    //       json: () => import('highlight.js/lib/languages/json'),
    //     },
    //   },
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
