import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GeekvapeZCards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/getProduct")
      .then((response) => response.json())
      .then(({ products }) => setProducts(products));
  }, []);
  let aegisItems = products.filter((products) => {
    return products.category === "Geekvape Z";
  });
  console.log(aegisItems)

  return (
    <Row xs={1} md={4} className="g-1">
      {aegisItems.map((item) => {
        return (
          <Col key={item.id} class="aegis-col">
            <Card className="aegis-cards">
              <Card.Img variant="top" src={item.url} />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}

    </Row>
  );
}

export default GeekvapeZCards;
