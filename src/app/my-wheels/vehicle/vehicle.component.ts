import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IVehicle } from 'src/app/core/interfaces/hot-wheels-vehicle.interface';
import { IItemVehicle } from 'src/app/core/interfaces/item-vehicle.interface';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleComponent implements OnInit, OnChanges {
  @Input() vehicle: IVehicle | undefined;
  @Input() itemVehicle: IItemVehicle = {
    collectionId: 0,
    collectionTypeId: 0,
    itemId: 0,
    vehicle: null,
  };

  vehicleOutput: IVehicle | undefined | null;

  @Input() showAdd = false;
  @Input() showDelete = false;

  @Output() addVehicle = new EventEmitter<IVehicle>();
  @Output() deleteVehicle = new EventEmitter<{
    event: Event;
    itemVehicle: IItemVehicle;
  }>();

  constructor() {
    this.vehicleOutput = null;
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'itemVehicle': {
            this.vehicleOutput = changes.itemVehicle.currentValue.vehicle;
            break;
          }
          case 'vehicle': {
            this.vehicleOutput = changes.vehicle.currentValue;
            break;
          }
        }
      }
    }
  }

  ngOnInit(): void {}

  addThisVehicle(): void {
    this.addVehicle.emit(this.vehicle);
  }

  deleteThisVehicle(event: Event): void {
    this.deleteVehicle.emit({ event, itemVehicle: this.itemVehicle });
  }
}
