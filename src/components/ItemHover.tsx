import Image from "next/image";
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Basket from "../store/basket";
import Catalog from "../store/catalog";

export default function ItemHover({
  id,
  elemInBasket,
}: {
  id: string | number;
  elemInBasket: boolean;
}) {
  const [showBasketText, setShowBasketText] = useState(false);
  const [hover, setHover] = useState(true);
  const itemInfo = Catalog.catalog.filter((item) => item.id === id)[0];
  const [inBasket, setInBasket] = useState(false);

  return (
    <ItemHoverBlock onMouseLeave={() => setHover(false)} toggle={hover}>
      <div
        style={{
          display: "flex",
          marginLeft: 107,
          marginTop: 18,
          marginRight: 14,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {showBasketText ? (
          <AddToBasket>
            {!elemInBasket
              ? inBasket
                ? "Уже в корзине"
                : "Добавить в корзину"
              : "Удалить из корзины"}
          </AddToBasket>
        ) : null}
        {/* <AddToBasket>Добавить в корзину</AddToBasket> */}
        {!elemInBasket ? (
          <Image
            src={inBasket ? "/img/addInBasket.svg" : "/img/basket.svg"}
            width="21px"
            height="26.09px"
            style={{
              marginLeft: 6,
              animationName: "animation",
              animationDuration: "3s",
            }}
            onMouseOver={() => setShowBasketText(true)}
            onMouseLeave={() => setShowBasketText(false)}
            onClick={() => {
              Basket.addToBasket(id);
              setInBasket(true);
            }}
          />
        ) : (
          <Image
            src="/img/deleteFromBasket.svg"
            width="21px"
            height="26.09px"
            style={{
              marginLeft: 6,
              animationName: "animation",
              animationDuration: "3s",
            }}
            onMouseOver={() => setShowBasketText(true)}
            onMouseLeave={() => setShowBasketText(false)}
            onClick={() => Basket.deleteFromBasket(id)}
          />
        )}
      </div>
      <CollectionName>{itemInfo.collectionName}</CollectionName>
      <UnderLine />
      <ItemName>{itemInfo.itemName}</ItemName>
      <DesignerName>designer: @{itemInfo.designer}</DesignerName>
      <Price>{itemInfo.price} ₽</Price>
    </ItemHoverBlock>
  );
}

const ItemHoverBlock = styled.div`
  position: absolute;
  z-index: 1;
  width: 281px;
  height: 379px;
  background: rgba(104, 94, 66, 0.23);
  background: rgb(230, 213, 196, 0.48);
  backdrop-filter: blur(11px);
  animation: ${({ toggle }) =>
    toggle
      ? css`
          slide 0.7s linear 
        `
      : css`
          hide 0.7s linear forwards
        `};

  @keyframes slide {
    0% {
      top: 378px;
      opacity: 0%;
      height: 0;
    }
    40% {
      top: 0;
      height: 379px;
      opacity: 40%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes hide {
    0% {
      height: 379px;
      top: 0;
    }
    100% {
      top: 379px;
      height: 0;
      opacity: 0;
    }
  }
`;

const animation = keyframes`
  0%{
      opacity:0%;
  }
  10%{
      opacity:0%;
  }
  100%{
      opacity:1;
  }
`;

const AddToBasket = styled.button`
  width: 132px;
  height: 21px;
  margin-right: 6px;
  background: rgba(53, 44, 44, 0.7);
  box-shadow: 0px 1px 4px #acacac;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

const CollectionName = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  margin-left: 22px;
  margin-top: 147px;
  color: ${({ theme }) => theme.colors.textDark};
  animation-name: ${animation};
  animation-duration: 2s;
`;

const UnderLine = styled.div`
  width: 107px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.textDark};
  margin-left: 22px;
  margin-top: 5px;
  animation-name: ${animation};
  animation-duration: 2s;
`;

const ItemName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-left: 22px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.textDark};
  animation-name: ${animation};
  animation-duration: 2s;
`;

const DesignerName = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.textDark};
  margin-left: 22px;
  margin-top: 9px;
  animation-name: ${animation};
  animation-duration: 2s;
`;

const Price = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textDark};
  margin-left: 22px;
  position: absolute;
  top: 90%;
  animation-name: ${animation};
  animation-duration: 2s;
`;

const HideAll = styled.div`
  opacity: 0;
  animation-name: hideAll;
  animation-duration: 1s;

  @keyframes hideAll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
