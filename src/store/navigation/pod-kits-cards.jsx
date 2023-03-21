import React from "react";
import "../store.css";
import { useState, useEffect } from "react";
import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PodKitsCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate.push("/my-cart");
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/getProduct")
      .then((response) => response.json())
      .then(({ products }) => {
        console.log(products);
        setProducts(products);
      });
  }, []);
  let podKits = products.filter((products) => {
    return products.id === "PodVapes";
  });

  return (
    <Row xs={1} md={4} className="g-1" id="cards-container">
      {podKits.map((item) => {
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

export default PodKitsCards;
