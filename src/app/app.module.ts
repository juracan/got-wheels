import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { AuthErrorComponent } from './presentation/auth-error/auth-error.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoggerService } from './core/services/logger.service';
import { HttpClientModule } from '@angular/common/http';

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
    AuthErrorComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
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
    MessageService,
    ConfirmationService,
    LoggerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
