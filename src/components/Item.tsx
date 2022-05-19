import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Catalog from "../store/catalog";
import ItemHover from "./ItemHover";

export default function Item({
  id,
  elemInBasket,
}: {
  id: number | string;
  elemInBasket: boolean;
}) {
  const [hover, onHover] = useState(false);
  const [startAnimationHide, setStartAnimationHide] = useState(false);
  const itemInfo = Catalog.catalog.filter((item) => item.id === id)[0];
  // const InBasket = Basket.basket.filter((item) => item.id === id)
  //   ? false
  //   : true;

  return (
    <ItemBlock
      onMouseOver={() => (!hover ? onHover(true) : null)}
      onMouseLeave={() => onHover(false)}
    >
      {hover ? <ItemHover id={id} elemInBasket={elemInBasket} /> : null}
      {/* <ItemHover /> */}
      <Image
        src={`/img/t-shirt/${itemInfo.imgUrl}`}
        width="281px"
        height="379px"
      />
      <Size>{itemInfo.size}</Size>
    </ItemBlock>
  );
}

const ItemBlock = styled.div`
  width: 281px;
  height: 379px;
  filter: drop-shadow(0px 1px 4px ${({ theme }) => theme.colors.shadowDark});
  border-radius: 1px;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const Size = styled.p`
  position: relative;
  top: -40px;
  width: fit-content;
  margin: auto;
  color: ${({ theme }) => theme.colors.sizeDark};
`;
