import React from "react";
import "./cart.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": `${process.env.REACT_APP_PAYPAL_KEY}`,
};
const product = { description: "Aegis Legend", price: 2500.0 };

function MyCart() {
  return (
    <>
      <section className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Shopping Cart</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src="image.jpg"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                <a href="#">Lorem Ipsum dolor</a>
                                <div className="product-info">
                                  <div>
                                    Display:{" "}
                                    <span className="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label htmlFor="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src="image.jpg"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                <a href="#">Lorem Ipsum dolor</a>
                                <div className="product-info">
                                  <div>
                                    Display:{" "}
                                    <span className="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label htmlFor="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src="image.jpg"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                <a href="#">Lorem Ipsum dolor</a>
                                <div className="product-info">
                                  <div>
                                    Display:{" "}
                                    <span className="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label htmlFor="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Summary</h3>
                  <div className="summary-item">
                    <span className="text">Subtotal</span>
                    <span className="price">$360</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Discount</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Shipping</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Total</span>
                    <span className="price">$360</span>
                  </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MyCart;
