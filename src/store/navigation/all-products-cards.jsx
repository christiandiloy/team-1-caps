import React from "react";
import "../store.css";
import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let searchValue = "";
function AllProductsCards() {
  const [products, setProducts] = useState([]);
  const fetchProducts = (value) => {
    fetch("http://localhost:3005/getProduct")
        .then((response) => response.json())
        .then ((result) => {
          const products = (result && result.products) ? result.products : result
          const results = value === "" ? products : products.filter((products) => {
            return (value && products.title && products.title.toLowerCase().includes(value));
          });
          setProducts(results);
        })
  }
  useEffect(
      () => {
        let searchChecker = setInterval(() => {
          const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
          });
          if(searchValue !== params.search){
            searchValue = params.search
            fetchProducts(searchValue)
          }
        },1000);
        return () => {
          clearInterval(searchChecker);
        };
      },
      []
  );

  let aegisItems = products.filter((products) => {
    return products;
  });

  return (
    <Row xs={1} md={4} className="g-1" id="cards-container">
      {aegisItems.map((item) => {
        return (
          <Col key={item.id} id="aegis-col">
            <Card id="aegis-cards">
              <Card.Img variant="top" src={item.url} />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>{item.title}</Card.Title>
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
                <button type="button" className="btn btn-success"  id="cart-btn">
                    Add to cart
                    <i className="fas fa-cart-plus nav-icon"></i>
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
