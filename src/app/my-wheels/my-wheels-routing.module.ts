import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWheelsComponent } from './add-wheels/add-wheels.component';
import { ListWheelsComponent } from './list-wheels/list-wheels.component';
import { MyWheelsView } from './my-wheels/my-wheels.view';

const routes: Routes = [
  {
    path: '',
    component: MyWheelsView,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'add', component: AddWheelsComponent },
      { path: 'list', component: ListWheelsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWheelsRoutingModule {}
