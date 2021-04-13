import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './presentation/about/about.component';
import { AuthErrorComponent } from './presentation/auth-error/auth-error.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { FeaturesComponent } from './presentation/features/features.component';
import { MyWheelsComponent } from './presentation/my-wheels/my-wheels.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-wheels', component: MyWheelsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: AuthErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
