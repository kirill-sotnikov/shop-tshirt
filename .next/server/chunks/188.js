"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 3481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Item)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/store/catalog.ts
var catalog = __webpack_require__(8723);
// EXTERNAL MODULE: ./src/store/basket.ts
var basket = __webpack_require__(2634);
;// CONCATENATED MODULE: ./src/components/ItemHover.tsx






function ItemHover({ id , elemInBasket  }) {
    const { 0: showBasketText , 1: setShowBasketText  } = (0,external_react_.useState)(false);
    const { 0: hover , 1: setHover  } = (0,external_react_.useState)(true);
    const itemInfo = catalog/* default.catalog.filter */.Z.catalog.filter((item)=>item.id === id
    )[0];
    const { 0: inBasket , 1: setInBasket  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ItemHoverBlock, {
        onMouseLeave: ()=>setHover(false)
        ,
        toggle: hover,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    marginLeft: 107,
                    marginTop: 18,
                    marginRight: 14,
                    alignItems: "center",
                    justifyContent: "flex-end"
                },
                children: [
                    showBasketText ? /*#__PURE__*/ jsx_runtime_.jsx(AddToBasket, {
                        children: !elemInBasket ? inBasket ? "\u0423\u0436\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435" : "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" : "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B"
                    }) : null,
                    !elemInBasket ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: inBasket ? "/img/addInBasket.svg" : "/img/basket.svg",
                        width: "21px",
                        height: "26.09px",
                        style: {
                            marginLeft: 6,
                            animationName: "animation",
                            animationDuration: "3s"
                        },
                        onMouseOver: ()=>setShowBasketText(true)
                        ,
                        onMouseLeave: ()=>setShowBasketText(false)
                        ,
                        onClick: ()=>{
                            basket/* default.addToBasket */.Z.addToBasket(id);
                            setInBasket(true);
                        }
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/img/deleteFromBasket.svg",
                        width: "21px",
                        height: "26.09px",
                        style: {
                            marginLeft: 6,
                            animationName: "animation",
                            animationDuration: "3s"
                        },
                        onMouseOver: ()=>setShowBasketText(true)
                        ,
                        onMouseLeave: ()=>setShowBasketText(false)
                        ,
                        onClick: ()=>basket/* default.deleteFromBasket */.Z.deleteFromBasket(id)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CollectionName, {
                children: itemInfo.collectionName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(UnderLine, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ItemName, {
                children: itemInfo.itemName
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DesignerName, {
                children: [
                    "designer: @",
                    itemInfo.designer
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Price, {
                children: [
                    itemInfo.price,
                    " \u20BD"
                ]
            })
        ]
    });
};
const ItemHoverBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-4dbc880c-0"
})`
  position: absolute;
  z-index: 1;
  width: 281px;
  height: 379px;
  background: rgba(104, 94, 66, 0.23);
  background: rgb(230, 213, 196, 0.48);
  backdrop-filter: blur(11px);
  animation: ${({ toggle  })=>toggle ? external_styled_components_.css`
          slide 0.7s linear 
        ` : external_styled_components_.css`
          hide 0.7s linear forwards
        `
};

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
const animation = external_styled_components_.keyframes`
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
const AddToBasket = external_styled_components_default().button.withConfig({
    componentId: "sc-4dbc880c-1"
})`
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
const CollectionName = external_styled_components_default().p.withConfig({
    componentId: "sc-4dbc880c-2"
})`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  margin-left: 22px;
  margin-top: 147px;
  color: ${({ theme  })=>theme.colors.textDark
};
  animation-name: ${animation};
  animation-duration: 2s;
`;
const UnderLine = external_styled_components_default().div.withConfig({
    componentId: "sc-4dbc880c-3"
})`
  width: 107px;
  height: 1px;
  background-color: ${({ theme  })=>theme.colors.textDark
};
  margin-left: 22px;
  margin-top: 5px;
  animation-name: ${animation};
  animation-duration: 2s;
`;
const ItemName = external_styled_components_default().p.withConfig({
    componentId: "sc-4dbc880c-4"
})`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-left: 22px;
  margin-top: 5px;
  color: ${({ theme  })=>theme.colors.textDark
};
  animation-name: ${animation};
  animation-duration: 2s;
`;
const DesignerName = external_styled_components_default().p.withConfig({
    componentId: "sc-4dbc880c-5"
})`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme  })=>theme.colors.textDark
};
  margin-left: 22px;
  margin-top: 9px;
  animation-name: ${animation};
  animation-duration: 2s;
`;
const Price = external_styled_components_default().p.withConfig({
    componentId: "sc-4dbc880c-6"
})`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  color: ${({ theme  })=>theme.colors.textDark
};
  margin-left: 22px;
  position: absolute;
  top: 90%;
  animation-name: ${animation};
  animation-duration: 2s;
`;
const HideAll = external_styled_components_default().div.withConfig({
    componentId: "sc-4dbc880c-7"
})`
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

;// CONCATENATED MODULE: ./src/components/Item.tsx






function Item({ id , elemInBasket  }) {
    const { 0: hover , 1: onHover  } = (0,external_react_.useState)(false);
    const { 0: startAnimationHide , 1: setStartAnimationHide  } = (0,external_react_.useState)(false);
    const itemInfo = catalog/* default.catalog.filter */.Z.catalog.filter((item)=>item.id === id
    )[0];
    // const InBasket = Basket.basket.filter((item) => item.id === id)
    //   ? false
    //   : true;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ItemBlock, {
        onMouseOver: ()=>!hover ? onHover(true) : null
        ,
        onMouseLeave: ()=>onHover(false)
        ,
        children: [
            hover ? /*#__PURE__*/ jsx_runtime_.jsx(ItemHover, {
                id: id,
                elemInBasket: elemInBasket
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `/img/t-shirt/${itemInfo.imgUrl}`,
                width: "281px",
                height: "379px"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Size, {
                children: itemInfo.size
            })
        ]
    });
};
const ItemBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-dcc6f551-0"
})`
  width: 281px;
  height: 379px;
  filter: drop-shadow(0px 1px 4px ${({ theme  })=>theme.colors.shadowDark
});
  border-radius: 1px;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 40px;
  cursor: pointer;
`;
const Size = external_styled_components_default().p.withConfig({
    componentId: "sc-dcc6f551-1"
})`
  position: relative;
  top: -40px;
  width: fit-content;
  margin: auto;
  color: ${({ theme  })=>theme.colors.sizeDark
};
`;


/***/ }),

/***/ 4188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "FE": () => (/* binding */ Collection),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e8": () => (/* binding */ UnderLine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3481);
/* harmony import */ var _store_basket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2634);
/* harmony import */ var _store_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8723);








const HomePage = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    paddingTop: 35,
                    paddingLeft: 41
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: "/img/logo.svg",
                    width: "141xp",
                    height: "38px"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: "First Collection"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UnderLine, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Collection, {
                children: _store_catalog__WEBPACK_IMPORTED_MODULE_7__/* ["default"].catalog.map */ .Z.catalog.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        id: item.id,
                        elemInBasket: false
                    }, item.id)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CountElemInBasket, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: _store_basket__WEBPACK_IMPORTED_MODULE_6__/* ["default"].basket.length */ .Z.basket.length
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    position: "fixed",
                    top: "92vh",
                    left: "32px",
                    cursor: "pointer"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/basket",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: "/img/basket.svg",
                        width: "30vh",
                        height: "30vh",
                        style: {
                            marginLeft: 6
                        },
                        onClick: ()=>console.log("basket")
                    })
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
const CountElemInBasket = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-1ddb0897-0"
})`
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
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1.withConfig({
    componentId: "sc-1ddb0897-1"
})`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  margin-top: 70px;
  color: ${({ theme  })=>theme.colors.textTitleDark
};
`;
const UnderLine = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-1ddb0897-2"
})`
  height: 1px;
  width: 80px;
  background-color: ${({ theme  })=>theme.colors.textTitleDark
};
  margin: 7.5px auto 0 auto;
`;
const Collection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-1ddb0897-3"
})`
  margin-top: 56px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

class Basket {
    basket = [];
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
    }
    addToBasket = (id)=>{
        this.basket = [
            ...this.basket,
            id
        ];
    };
    deleteFromBasket = (id)=>{
        this.basket = [
            ...this.basket.filter((item)=>item !== id
            )
        ];
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Basket());


/***/ }),

/***/ 8723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

class Catalog {
    catalog = [
        {
            collectionName: "First Collection",
            itemName: "Axios",
            imgUrl: "t-shirt-1.jpeg",
            size: "m",
            designer: "teamMayka",
            price: "1000",
            id: 1
        },
        {
            collectionName: "First Collection",
            itemName: "BlackD",
            imgUrl: "t-shirt-2.jpeg",
            size: "xl",
            designer: "teamMayka",
            price: "800",
            id: 2
        },
        {
            collectionName: "First Collection",
            itemName: "Uka",
            imgUrl: "t-shirt-3.jpeg",
            size: "s",
            designer: "teamMayka",
            price: "888",
            id: 3
        },
        {
            collectionName: "First Collection",
            itemName: "Fork",
            imgUrl: "t-shirt-4.jpeg",
            size: "xs",
            designer: "teamMayka",
            price: "1000",
            id: 4
        }, 
    ];
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Catalog());


/***/ })

};
;