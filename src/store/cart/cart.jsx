import React from "react";
import "./cart.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  useCartTotals,
} from "../features/cartSlice";

const initialOptions = {
  "client-id": `${process.env.REACT_APP_PAYPAL_KEY}`,
};

function MyCart(props) {
  const { cartTotalAmount, cartTotalQuantity } = useCartTotals();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.cartItems.length > 0 && cart.cartTotalAmount === 0) {
      dispatch(getTotals());
    }
  }, [cart, dispatch]);

  const ShippingFee = cartTotalAmount * 0.01;

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecrement = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncrement = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <section className="shopping-cart dark">
        <div className="block-heading">
          <h2>Shopping Cart</h2>
        </div>
        <div className="container">
          {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <div className="start-shopping d-flex justify-content-center">
                <Link to="/" className="anchor">
                  <i class="fa-solid fa-arrow-left"></i>
                  <span className="span">Shop now!</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    <div className="product">
                      <div className="row">
                        {cart.cartItems?.map((cartItem) => (
                          <div className="cart-item" key={cartItem.id}>
                            <div class="rounded-3 mb-4">
                              <div class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                  <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={cartItem.url}
                                      class="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-3">
                                    <p class="lead fw-normal mb-2">
                                      {cartItem.title}
                                    </p>
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex cart-product-quantity">
                                    <button
                                      class="cart-product-quantity-button"
                                      onClick={() => handleDecrement(cartItem)}
                                    >
                                      -
                                    </button>

                                    <div className="count">
                                      {cartItem.cartQuantity}
                                    </div>

                                    <button
                                      class=" cart-product-quantity-button"
                                      onClick={() => handleIncrement(cartItem)}
                                    >
                                      +
                                    </button>
                                  </div>
                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">
                                      <i class="fa-solid fa-peso-sign"></i>
                                      {(
                                        cartItem.price * cartItem.cartQuantity
                                      ).toFixed(2)}
                                    </h5>
                                  </div>
                                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button
                                      class="text-danger"
                                      style={{ background: "none" }}
                                      onClick={() =>
                                        handleRemoveFromCart(cartItem)
                                      }
                                    >
                                      <i class="fas fa-trash fa-lg"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal</span>
                      <span className="price">
                        <i class="fa-solid fa-peso-sign"></i>
                        {cartTotalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Discount</span>
                      <span className="price">
                        <i class="fa-solid fa-peso-sign"></i>0
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping</span>
                      <span className="price">
                        <i class="fa-solid fa-peso-sign"></i>
                        {ShippingFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">
                        <i class="fa-solid fa-peso-sign"></i>
                        {(cartTotalAmount + ShippingFee).toFixed(2)}
                      </span>
                    </div>
                    <button
                      className="shopping-btn btn btn-warning btn-lg w-100"
                      onClick={() => handleClearCart()}
                    >
                      Clear Cart
                    </button>
                    <div className="mt-3 text-center ">
                      <p>Choose payment options:</p>
                    </div>
                    {/* Paypal Checkout */}
                    <div className="container">
                      <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons />
                      </PayPalScriptProvider>
                      <p className="text-center">or</p>
                      <button className="shopping-btn btn btn-warning btn-lg w-100">
                        <i class="fas fa-truck"></i>&nbsp;Cash on Delivery
                      </button>
                      <div className="continue-shopping">
                        <Link
                          to="/"
                          className="anchor"
                          onClick={() => {
                            props.setCurrentLink("/");
                          }}
                        >
                          <i class="fa-solid fa-arrow-left"></i>
                          <span className="span">Continue shopping</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default MyCart;
