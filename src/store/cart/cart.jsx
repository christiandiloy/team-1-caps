import React from "react";
import "./cart.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { serverRoutes } from "../../Utils/const";
import { fetchUserProfile } from "../../Utils/fetch";
import { json, Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  useCartTotals,
} from "../features/cartSlice";

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

  //Get address from database
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch(serverRoutes.FindAddress)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAddresses(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Paypal Payment
  const initialOptions = {
    "client-id": `${process.env.REACT_APP_PAYPAL_KEY}`,
  };

  const [userData, setUserData] = useState({
    fullName: "",
  });

  useEffect(() => {
    fetchUserProfile()
      .then((data) => {
        setUserData({
          fullName: data.full_name,
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  //Orders to Database
  const [selectedAddress, setSelectedAddress] = useState("");
  function handleAddressChange(event) {
    setSelectedAddress(event.target.value);
  }

  const handleSubmitOrder = async (event) => {
    event.preventDefault();

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    // Create an array of items with their id and quantity
    const items = cartItems.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      };
    });

    const userID = JSON.parse(localStorage.getItem("user")).id;
    const total = cartTotalAmount.toFixed(2);
    const orderID = Date.now();
    const address = selectedAddress;
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(serverRoutes.saveOrder, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userID,
          orderID,
          items,
          address,
          total,
        }),
      });
      const data = await response.json();
      console.log(data);
      dispatch(clearCart());
    } catch (error) {
      console.error(error);
    }
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
              <div className="start-shopping">
                <Link to="/" className="anchor" onClick={() => {
                            props.setCurrentLink("/");
                          }}>
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
                      <div className="row justify-content-center">
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
                        <button
                          className="shopping-btn btn btn-warning text-light w-50 ms-3"
                          onClick={() => handleClearCart()}
                        >
                          Clear Cart
                        </button>
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
                    <div>
                      <select
                        className="form-select mt-3"
                        aria-label="Default select example"
                        value={selectedAddress}
                        onChange={handleAddressChange}
                      >
                        <option selected>Select Address</option>
                        {addresses.map((address) => (
                          <option key={address.id} value={address.id}>
                            {address.house_no} {address.place}
                            {", "}
                            {address.postal_code}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-3 text-center ">
                      <p>Choose payment options:</p>
                    </div>
                    {/* Paypal Checkout */}
                    <div className="container">
                      <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value: cartTotalAmount.toFixed(2),
                                  },
                                },
                              ],
                              application_context: {
                                shipping_preference: "NO_SHIPPING",
                              },
                            });
                          }}
                          onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                              alert(
                                `Transaction completed by ${userData.fullName}`
                              );
                              handleSubmitOrder(); //Save orders to database
                              handleClearCart();
                              //Code for go to Order
                            });
                          }}
                        />
                      </PayPalScriptProvider>
                      <p className="text-center">or</p>
                      <div className="continue-shopping d-flex justify-content-center">
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
