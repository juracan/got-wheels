export interface IVehicleStyle {
  Id: number;
  Name: string;
  ImageUrl: string;
  Number: number;
  StyleSEOName: string;
}

export interface IVehicleSideViewPhoto {
  URL: string;
  Resolution: string;
  ContentId?: any;
}

export interface IVehicleMainImage {
  URL: string;
  Resolution?: any;
  ContentId?: any;
}

export interface IVehicleThumbnailImage {
  URL: string;
  Resolution?: any;
  ContentId?: any;
}

export interface IVehicle {
  CarMetaID: number;
  CarOrderNumber: string;
  TotalItems: number;
  Title: string;
  ToyNumber: string;
  CarMetaSEOName: string;
  CategoryId?: any;
  MiniCollectionId: number;
  MiniCollection: string;
  GameCategoryId: number;
  GameCategory?: any;
  MiniCollectionUrl: string;
  MakeUrl?: any;
  ColorUrl: string;
  SeriesUrl?: any;
  ColorSEOName: string;
  ColorCode: string;
  MakeSEOName: string;
  MiniCollectionSEOName: string;
  Year: number;
  SeriesId?: any;
  Series?: any;
  MakeId: number;
  Make: string;
  ColorId: number;
  Color: string;
  Packagingcode: string;
  CarMetaDescription?: any;
  LiveDate?: any;
  IsNew: number;
  DisplayFlag: boolean;
  Createddate: Date;
  CreatedBy?: any;
  Modifieddate?: any;
  ModifiedBy?: any;
  Styles: IVehicleStyle[];
  ThreeQuarterUnity: any[];
  Sideviewphotos: IVehicleSideViewPhoto[];
  SideviewGIFphotos: any[];
  Topdownphotos: any[];
  UnityImages_iOS: any[];
  UnityImages_Android: any[];
  MainImages: IVehicleMainImage[];
  BrandImages: any[];
  ThumbnailImages: IVehicleThumbnailImage[];
  carouselImages: any[];
  ThreeSixtyDegreeVideo: any[];
  AnimationImage: any[];
}
