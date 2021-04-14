import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IVehicle } from '../interfaces/hot-wheels-vehicle.interface';
import { IItemVehicle } from '../interfaces/item-vehicle.interface';
import { IItem } from '../interfaces/item.interface';
import { ILabelValue } from '../interfaces/label-value.interface';
import { DataService } from './data.service';
// import * as cars from '../../assets/cars.json';

@Injectable({
  providedIn: 'root',
})
export class MyWheelsService {
  constructor(private dataService: DataService) {}

  // getCollections(userId: number = 1): Observable<ILabelValue[]> {
  //   return this.dataService.getCollections(userId).pipe(
  //     map((list) => {
  //       const collections = [];
  //       list.forEach((col) => {
  //         collections.push({
  //           label: col.collectionName,
  //           value: col.collectionId,
  //         });
  //       });
  //       collections.push({ label: 'All Collections', value: 'all' });
  //       return collections;
  //     })
  //   );
  // }

  // addVehicle(vehicle: IVehicle): Observable<any> {
  //   const item: IItem = {
  //     itemId: null,
  //     item: JSON.stringify(vehicle),
  //     collectionId: 1,
  //     collectionTypeId: 1,
  //   };
  //   return this.dataService.postItem(item);
  // }

  // deleteVehicle(itemId: number): Observable<any> {
  //   return this.dataService.deleteItem(itemId);
  // }

  // getAllVehicles(userId: number): Observable<IItemVehicle[]> {
  //   return this.dataService.getAllItemsByUser(userId).pipe(
  //     map((list: IItem[]) => {
  //       const vehicles: IItemVehicle[] = [];
  //       list.forEach((item) => {
  //         const v: IItemVehicle = {
  //           itemId: item.itemId,
  //           vehicle: JSON.parse(item.item),
  //           collectionId: item.collectionId,
  //           collectionTypeId: item.collectionTypeId,
  //         };
  //         vehicles.push(v);
  //       });
  //       return vehicles;
  //     })
  //   );
  // }

  // listCars(): IVehicle[] {
  //   return (cars as any).default.obj;
  // }
}
