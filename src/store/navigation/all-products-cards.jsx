import React from "react";
import "../store.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

let searchValue = "";
function AllProductsCards() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate.push("/my-cart");
  };

  const fetchProducts = (value) => {
    fetch("http://localhost:3005/getProduct")
      .then((response) => response.json())
      .then((result) => {
        const products = result && result.products ? result.products : result;
        const filteredProducts =
          value === ""
            ? products
            : products.filter(
                (product) =>
                  product.title &&
                  product.title.toLowerCase().includes(value.toLowerCase())
              );
        setProducts(filteredProducts);
      })
      .catch((error) => console.log("fetchProducts error:", error));
  };

  useEffect(() => {
    fetchProducts(searchValue);
    let searchChecker = setInterval(() => {
      const searchParams = new URLSearchParams(
        window.location.href.split("?")[1]
      );
      const params = new Proxy(searchParams, {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      if (searchValue !== params.search) {
        searchValue = params.search;
        fetchProducts(searchValue);
      }
    }, 1000);
    return () => {
      clearInterval(searchChecker);
    };
  }, []);

  let aegisItems = products.filter((products) => {
    return products;
  });

  console.log("products:", products);
  console.log("aegisItems:", aegisItems);

  //Item page links
  const itemURL = "http://localhost:3000/item-page/";

  return (
    <Row xs={1} md={4} className="g-1" id="cards-container">
      {aegisItems.map((item) => {
        return (
          <Col key={item.id} id="aegis-col">
            <Card id="aegis-cards">
              <Link
                to={`${itemURL}AegisBonusKit`} //link of page_name: Change AegisBonusKit
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Img variant="top" src={item.url} />
                <Card.Title
                  style={{
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Card.Title>
              </Link>
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Text>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>
                  <i class="fa-solid fa-star star"></i>({item.star})
                </Card.Text>
                <Card.Text className="text-muted">
                  <i class="fa-solid fa-peso-sign"></i>
                  {item.price}
                </Card.Text>
                <button
                  type="button"
                  className="btn btn-success w-100"
                  id="cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  + Add to cart
                </button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default AllProductsCards;
