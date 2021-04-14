import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MyWheelsRoutingModule } from './my-wheels-routing.module';

import { MyWheelsComponent } from './my-wheels.component';
import { AddWheelsComponent } from './add-wheels/add-wheels.component';
import { MyWheelsView } from './my-wheels/my-wheels.view';
import { ListWheelsComponent } from './list-wheels/list-wheels.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';



@NgModule({
  declarations: [
    MyWheelsComponent,
    AddWheelsComponent,
    MyWheelsView,
    ListWheelsComponent,
    VehicleComponent,
    VehicleFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyWheelsRoutingModule,
    SharedModule,
  ],
})
export class MyWheelsModule {}
