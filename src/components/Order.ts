/*
  * Интерфейс, описывающий окошко заказа товара
  * */
export interface IOrder {
  // Адрес
  address: string;

  // Способ оплаты
  payment: string;
}