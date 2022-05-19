import { makeAutoObservable } from "mobx";

interface catalogItem {
  collectionName: string;
  itemName: string;
  designer: string;
  imgUrl: string;
  size: string;
  price: number | string;
  id: number | string;
}

class Catalog {
  catalog: catalogItem[] = [
    {
      collectionName: "First Collection",
      itemName: "Axios",
      imgUrl: "t-shirt-1.jpeg",
      size: "m",
      designer: "teamMayka",
      price: "1000",
      id: 1,
    },
    {
      collectionName: "First Collection",
      itemName: "BlackD",
      imgUrl: "t-shirt-2.jpeg",
      size: "xl",
      designer: "teamMayka",
      price: "800",
      id: 2,
    },
    {
      collectionName: "First Collection",
      itemName: "Uka",
      imgUrl: "t-shirt-3.jpeg",
      size: "s",
      designer: "teamMayka",
      price: "888",
      id: 3,
    },
    {
      collectionName: "First Collection",
      itemName: "Fork",
      imgUrl: "t-shirt-4.jpeg",
      size: "xs",
      designer: "teamMayka",
      price: "1000",
      id: 4,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Catalog();
