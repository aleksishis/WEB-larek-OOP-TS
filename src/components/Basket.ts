import { IProduct } from '../types';

/*
  * Интерфейс, описывающий корзину товаров
  * */
export interface IBasket {
  // Массив элементов li с товаром
  list: HTMLElement[];

  // Общая цена товаров
  price: number;
}

/*
  * Класс, описывающий корзину товаров
  * */


export interface IProductBasket extends IProduct {
  id: string;
  index: number;
}

export interface IStoreItemBasketActions {
  onClick: (event: MouseEvent) => void;
}
