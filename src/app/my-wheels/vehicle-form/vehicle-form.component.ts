import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IVehicle,
  IVehicleMainImage,
} from 'src/app/core/interfaces/hot-wheels-vehicle.interface';
import { HotWheelsApiService } from 'src/app/core/services/hot-wheels-api.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements OnInit {
  vehicleForm!: FormGroup;
  vehiclePreview: IVehicle | undefined;

  constructor(
    private fb: FormBuilder,
    private hotWheelsService: HotWheelsApiService
  ) {}

  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      toyNumber: '',
      packageCode: ['', Validators.required],
      imageUrl: '',
      title: ['', Validators.required],
      miniCollection: '',
      colorCode: '',
      make: '',
      year: '',
    });

    this.vehicleForm.valueChanges.subscribe((val) => {
      let tempImageUrl = '';
      if (val.packageCode) {
        tempImageUrl = this.hotWheelsService.getCarImageBySku(val.packageCode);
      } else {
        tempImageUrl =
          'https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/GHF74_C_003.png';
      }
      this.vehiclePreview = {
        ToyNumber: val.toyNumber,
        Packagingcode: val.packageCode,
        MainImages: [
          {
            URL: tempImageUrl,
          },
        ] as IVehicleMainImage[],
        Title: val.title,
        MiniCollection: val.miniCollection,
        ColorCode: val.colorCode,
        Make: val.make,
        Year: val.year,

        Createddate: new Date(),

        CarMetaID: 0,
        CarOrderNumber: '',
        TotalItems: 0,
        CarMetaSEOName: '',
        CategoryId: null,
        MiniCollectionId: 0,
        GameCategoryId: 0,
        GameCategory: null,
        MiniCollectionUrl: '',
        MakeUrl: null,
        ColorUrl: '',
        SeriesUrl: null,
        ColorSEOName: '',
        MakeSEOName: '',
        MiniCollectionSEOName: '',
        SeriesId: null,
        Series: null,
        MakeId: 0,
        ColorId: 0,
        Color: '',
        CarMetaDescription: null,
        LiveDate: null,
        IsNew: 0,
        DisplayFlag: false,
        CreatedBy: null,
        Modifieddate: null,
        ModifiedBy: null,
        Styles: [],
        ThreeQuarterUnity: [],
        Sideviewphotos: [],
        SideviewGIFphotos: [],
        Topdownphotos: [],
        UnityImages_iOS: [],
        UnityImages_Android: [],
        BrandImages: [],
        ThumbnailImages: [],
        carouselImages: [],
        ThreeSixtyDegreeVideo: [],
        AnimationImage: [],
      };
    });
  }

  onAddVehicle(): void {
    if (this.vehicleForm?.valid) {
      alert('Valid ADD!');
    } else {
      alert('INVALID NOT ADDED!');
    }
  }

  cancelManualAdd(): void {}

  manualAdd(): void {}
}
