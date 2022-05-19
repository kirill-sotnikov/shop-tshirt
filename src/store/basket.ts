import { makeAutoObservable } from "mobx";

class Basket {
  basket = [];
  constructor() {
    makeAutoObservable(this);
  }

  addToBasket = (id) => {
    this.basket = [...this.basket, id];
  };

  deleteFromBasket = (id) => {
    this.basket = [...this.basket.filter((item) => item !== id)];
  };
}

export default new Basket();
