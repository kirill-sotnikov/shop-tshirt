import { observer } from "mobx-react";
import Image from "next/image";
import { useEffect } from "react";
import Item from "../components/Item";
import Basket from "../store/basket";
import Catalog from "../store/catalog";
import { Collection, Title, UnderLine } from "./HomePage";
const BasketPage = observer(() => {
  const elementOfBasket = Catalog.catalog.filter(
    (item) => Basket.basket.indexOf(item.id) !== -1
  );

  useEffect(() => {
    console.log(elementOfBasket);
  });
  return (
    <>
      <div style={{ paddingTop: 35, paddingLeft: 41 }}>
        <Image src="/img/logo.svg" width="141xp" height="38px" />
      </div>
      <Title>Корзина</Title>
      <UnderLine />
      <Collection>
        {elementOfBasket.map((item) => (
          <Item id={item.id} elemInBasket={true} key={item.id} />
        ))}
      </Collection>
    </>
  );
});
export default BasketPage;
