// Cart CSS is located in Store.css

import React, { useRef, useState } from "react";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";

import toast from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import { Button, Typography } from "@mui/material";

function Cart() {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div
        style={{ width: "100vw", height: "1000px" }}
        onClick={() => {
          setShowCart(false);
        }}
      ></div>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <ArrowLeftOutlinedIcon />
          <span className="heading">Jūsu Grozs</span>
          <span className="cart-num-items">({totalQuantities}) preces</span>
        </button>
        {cartItems.length < 1 && (
          <div
            className="empty-cart"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyItems: "center",
            }}
          >
            <LocalMallOutlinedIcon sx={{ fontSize: "12rem" }} />
            <Typography variant="h3">Jūsu grozs ir tukšs.</Typography>
            <Button href="/" className="slug-desc-button-buy">
              {" "}
              Turpināt iepirkties
            </Button>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}€</h4>
                  </div>
                  <div className="flex bttom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <RemoveIcon />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AddIcon />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <ClearIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>{totalPrice.toFixed(2)}€</h3>
            </div>
            <div className="btn-container">
              <button className="btn" type="button" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
