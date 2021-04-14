import { IVehicle } from './hot-wheels-vehicle.interface';

export class IItemVehicle {
  public itemId!: number;
  public vehicle: IVehicle | null | undefined;
  public collectionId!: number;
  public collectionTypeId!: number;
}
