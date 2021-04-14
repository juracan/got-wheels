import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './presentation/about/about.component';
import { AuthErrorComponent } from './presentation/auth-error/auth-error.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { FeaturesComponent } from './presentation/features/features.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'my-wheels',
    loadChildren: () =>
      import('./my-wheels/my-wheels.module').then((m) => m.MyWheelsModule),
  },
  { path: 'features', component: FeaturesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: AuthErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
