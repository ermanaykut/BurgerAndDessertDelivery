export interface IBurger {
  desc: string;
  id:number;
  images:string;
  ingredients:any[];
  img?:string;
  name: string;
  price: number;
  veg: boolean;
}

export interface IDessert {
  description: string;
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}
export interface IExtra {
  id: number;
  name:string;
  price:number;
}

export interface IAddress{
  id?:any;
  addressName: string;
  name: string;
  familyName: string;
  streetName: string;
  buildingNumber?: string;
  flatNumber?: string;
  floorNumber?: string;
  countyName: string;
  cityName: string;
  defaultAddress: boolean;
}

export enum EProductType {
  BURGER = 'burger',
  DESSERT = 'dessert',
}
