import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { IVehicle } from 'src/app/core/interfaces/hot-wheels-vehicle.interface';
import { IItemVehicle } from 'src/app/core/interfaces/item-vehicle.interface';
import { LoggerService } from 'src/app/core/services/logger.service';
import { MyWheelsService } from 'src/app/core/services/my-wheels.service';

@Component({
  selector: 'app-list-wheels',
  templateUrl: './list-wheels.component.html',
  styleUrls: ['./list-wheels.component.scss'],
})
export class ListWheelsComponent implements OnInit {
  itemVehicles$: Observable<IItemVehicle[]> | undefined;

  // allCars: IVehicle[];

  constructor(
    private myWheelsService: MyWheelsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private log: LoggerService
  ) {}

  ngOnInit(): void {
    // this.itemVehicles$ = this.myWheelsService.getAllVehicles(1);
    // this.allCars = this.myWheelsService.listCars();
  }

  onDeleteVehicle(e: { event: Event; itemVehicle: IItemVehicle }): void {
    const {
      event,
      itemVehicle,
    }: { event: Event; itemVehicle: IItemVehicle } = e;

    // this.confirmationService.confirm({
    //   target: event.target || undefined,
    //   message: 'Are you sure that you want to delete?',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.myWheelsService
    //       .deleteVehicle(itemVehicle.itemId)
    //       .subscribe((status) => {
    //         this.itemVehicles$ = this.myWheelsService.getAllVehicles(1);
    //         this.messageService.add({
    //           severity: 'info',
    //           summary: 'Vehicle Removed',
    //           detail:
    //             'A ' +
    //             itemVehicle.vehicle.Title +
    //             ' was removed from your collection.',
    //         });
    //       });
    //   },
    //   reject: () => {
    //     this.log.log('User cancelled transaction to delete vehicle.');
    //     this.log.warn('User cancelled transaction to delete vehicle.');
    //     this.log.error('User cancelled transaction to delete vehicle.');
    //     this.log.info(itemVehicle);
    //   },
    // });
  }
}
