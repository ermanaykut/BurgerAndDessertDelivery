import {action, computed, makeAutoObservable, observable} from 'mobx';
import {EProductType} from '../constants/types';

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable cart: any[] = [];
  @observable total: number = 0;
  @computed get cartLength() {
    return this.cart.length;
  }

  @action addToCart = (params: any) => {

    // Check if the product type is BURGER or DESSERT
    if (
      params?.productType === EProductType.BURGER ||
      params?.productType === EProductType.DESSERT
    ) {
      if (params?.price && params?.count) 
      this.total += params?.price * params?.count;
    }

    // Find the product in the cart based on item ID
    let existingProduct = this.cart.find(x => x?.item?.id === params?.item?.id);

    if (existingProduct) {

      if (existingProduct.productType === EProductType.DESSERT && params.productType === EProductType.DESSERT) {
        // If the existing product is a dessert, update the count directly
        existingProduct.count += params?.count;
      } else {
        // Product with the same item ID exists in the cart

        // Sort the extras arrays for comparison
        const existingExtrasSorted = existingProduct.extra
          .slice()
          .sort((a: {id: number}, b: {id: number}) => a.id - b.id);

          
          
          const newExtrasSorted = params.extra
          .slice()
          .sort((a: {id: number}, b: {id: number}) => a.id - b.id);



        // Check if the sorted extras are the same
        const extrasMatch =
          JSON.stringify(existingExtrasSorted) ===
          JSON.stringify(newExtrasSorted);

        if (extrasMatch) {

          // If the sorted extras are the same, increment the count
          existingProduct.count += params?.count;
        } else {

          // If the sorted extras are different, add a new product entry
          this.cart.push(params);
        }
      }
    } else {

      // Product with the same item ID does not exist in the cart, so add it
      this.cart.push(params);
    }
  };

  @action changeCount = (params: any, type: string) => {
    let arr = [...this.cart];
    let index = arr.findIndex(
      x =>
        x?.item?.id === params?.item?.id &&
        JSON.stringify(
          x?.extra
            ?.slice()
            .sort((a: {id: number}, b: {id: number}) => a.id - b.id),
        ) ===
          JSON.stringify(
            params?.extra
              ?.slice()
              .sort((a: {id: number}, b: {id: number}) => a.id - b.id),
          ),
    );

    if (index !== -1) {
      if (params?.productType === EProductType.DESSERT) {
        // Update the count for desserts
        arr[index] = {
          ...arr[index],
          count:
            type === 'plus'
              ? arr[index]?.count + 1
              : Math.max(0, arr[index]?.count - 1),
        };
      } else if (params?.productType === EProductType.BURGER) {
        // If there's an item with the same ID and matching extras, update the count
        arr[index] = {
          ...arr[index],
          count:
            type === 'plus'
              ? arr[index]?.count + 1
              : Math.max(0, arr[index]?.count - 1),
        };
      }
      this.cart = arr;

      if (type === 'plus') this.total += params?.price;
      else this.total -= params?.price;
    }
  };

  @action clearAll = () => {
    this.cart = [];
    this.total = 0;
  }; //total sıfırlanmıyor

  @action deleteProduct = (params: any) => {
    let arr: any[] = [];

    this.cart?.forEach(x => {
      if (x?.item?.id === params?.item?.id) {
        if (params?.productType === EProductType.DESSERT) {
          this.total -= x?.price;
        } else {
          const existingExtrasSorted = x.extra
            .slice()
            .sort((a: {id: number}, b: {id: number}) => a.id - b.id);
          const newExtrasSorted = params.extra
            .slice()
            .sort((a: {id: number}, b: {id: number}) => a.id - b.id);

          // Check if the sorted extras are the same
          const extrasMatch =
            JSON.stringify(existingExtrasSorted) ===
            JSON.stringify(newExtrasSorted);

          if (extrasMatch) {
            this.total -= x?.price;
          } else {
            arr.push(x);
          }
        }
      } else {
        arr.push(x);
      }
    });

    this.cart = arr;
  };

  // arraysEqual = (array1: Array<{ id: number }>, array2: Array<{ id: number }>): boolean => {
  //   if (array1.length !== array2.length) {
  //     return false;
  //   }
  //
  //   for (let i = 0; i < array1.length; i++) {
  //      if (array1[i]?.id !== array2[i]?.id) {
  //       return false;
  //     }
  //   }
  //
  //   return true;
  // };

  //  @action changeCount = (params: any, type: string) => {
  //    let arr = [...this.cart];
  //   let index = arr.findIndex((x) => x?.item?.id === params?.item?.id && this.extrasMatch(x?.extra, params?.extra));
  //
  //   if (index !== -1) {
  //      if (params?.productType === EProductType.DESSERT) {
  //        // Update the count for desserts
  //        arr[index] = {
  //          ...arr[index],
  //          count: type === 'plus' ? arr[index]?.count + 1 : Math.max(0, arr[index]?.count - 1),
  //        };
  //      } else if (params?.productType === EProductType.BURGER) {//
  //       if (index !== -1) {
  //      If there's an item with the same ID and matching extras, update the count
  //         arr[index] = {
  //          ...arr[index],
  //         count: type === 'plus' ? arr[index]?.count + 1 : Math.max(0, arr[index]?.count - 1),
  //         };
  //       }
  //      }
  //
  //      this.cart = arr;
  //
  //      if (type === 'plus') this.total += params?.price;
  //      else this.total -= params?.price;
  //    }
  //  };
  //
  //  // Helper function to check if extras match
  // extrasMatch = (extras1: string[]=[], extras2: string[]=[]) => {//
  //  const extrasSorted1 = extras1.slice().sort();
  //  const extrasSorted2 = extras2.slice().sort();
  //  return JSON.stringify(extrasSorted1) === JSON.stringify(extrasSorted2);
  //  };
}

export default new CartStore();
