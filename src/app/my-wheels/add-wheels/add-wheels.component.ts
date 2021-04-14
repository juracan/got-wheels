import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { IVehicle } from 'src/app/core/interfaces/hot-wheels-vehicle.interface';
import { HotWheelsApiService } from 'src/app/core/services/hot-wheels-api.service';
import { MyWheelsService } from 'src/app/core/services/my-wheels.service';

@Component({
  selector: 'app-add-wheels',
  templateUrl: './add-wheels.component.html',
  styleUrls: ['./add-wheels.component.scss'],
})
export class AddWheelsComponent implements OnInit {
  addWheelsForm!: FormGroup;
  foundVehicle: IVehicle | null | undefined;
  showForm = false;
  searched = false;

  constructor(
    private fb: FormBuilder,
    private hotWheelsService: HotWheelsApiService,
    private myWheelsService: MyWheelsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.addWheelsForm = this.fb.group({
      itemId: 'GHC73',
    });
  }

  searchVehicle(): void {
    this.hotWheelsService
      .getCarData(this.addWheelsForm?.get('itemId')?.value)
      .pipe(
        tap(() => {
          this.searched = true;
        })
      )
      .subscribe(
        (vehicle) => {
          this.foundVehicle = vehicle[0];
        },
        (error) => {
          this.foundVehicle = null;
          setTimeout(() => {
            this.searched = false;
          }, 5000);
        }
      );
  }

  showVehicleForm(): void {
    this.showForm = true;
  }

  cancelManualAdd(): void {
    this.showForm = false;
  }

  onAddVehicle(vehicle: IVehicle): void {
    // this.myWheelsService.addVehicle(vehicle).subscribe((status: any) => {
    //   const myStatus = status;
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Vehicle Added',
    //     detail: vehicle.Title + ' was added to your collection.',
    //   });
    //   this.resetSearch();
    // });
  }

  resetSearch(): void {
    this.foundVehicle = null;
    this.searched = false;
    this.showForm = false;
    this.addWheelsForm?.reset();
    this.addWheelsForm?.markAsPristine();
    this.addWheelsForm?.markAsUntouched();
  }
}
