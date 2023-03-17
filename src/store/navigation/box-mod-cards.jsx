import React from "react";
import "../store.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { addToCart } from "../features/cartSlice";

function BoxModCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/getProduct")
      .then((response) => response.json())
      .then(({ products }) => setProducts(products));
  }, []);
  let aegisItems = products.filter((products) => {
    return products.category === "BoxMods";
  });
  console.log(aegisItems);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate.push("/my-cart");
  };

  return (
    <Row xs={1} md={4} className="g-3" id="cards-container">
      {aegisItems.map((item) => {
        return (
          <Col key={item.id} class="aegis-col">
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
                  {item.text}
                </Card.Text>
                <Button
                  type="button"
                  className="btn btn-success w-100"
                  id="cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  + Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default BoxModCards;
