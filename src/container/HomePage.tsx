import { observer } from "mobx-react-lite";
import Link from "next/link";
import styled from "styled-components";
import Image from "../../node_modules/next/image";
import Item from "../components/Item";
import Basket from "../store/basket";
import Catalog from "../store/catalog";
const HomePage = observer(() => {
  return (
    <>
      <div style={{ paddingTop: 35, paddingLeft: 41 }}>
        <Image src="/img/logo.svg" width="141xp" height="38px" />
      </div>
      <Title>First Collection</Title>
      <UnderLine />
      <Collection>
        {Catalog.catalog.map((item) => (
          <Item id={item.id} elemInBasket={false} key={item.id} />
        ))}
      </Collection>
      <CountElemInBasket>
        <p>{Basket.basket.length}</p>
      </CountElemInBasket>
      <span
        style={{
          position: "fixed",
          top: "92vh",
          left: "32px",
          cursor: "pointer",
        }}
      >
        <Link href="/basket">
          <Image
            src="/img/basket.svg"
            width="30vh"
            height="30vh"
            style={{
              marginLeft: 6,
            }}
            onClick={() => console.log("basket")}
          />
        </Link>
      </span>
    </>
  );
});

export default HomePage;

const CountElemInBasket = styled.div`
  position: fixed;
  top: 92vh;
  left: 32px;
  margin: -35px 0 0px 25px;
  width: 4vh;
  height: 4vh;
  background: #ffffff;
  border: 0.25px solid rgba(221, 221, 221, 0.8);
  border-radius: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  margin-top: 70px;
  color: ${({ theme }) => theme.colors.textTitleDark};
`;

export const UnderLine = styled.div`
  height: 1px;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.textTitleDark};
  margin: 7.5px auto 0 auto;
`;

export const Collection = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
