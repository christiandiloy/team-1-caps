import React from "react";
import "./store.css";
import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/getProduct")
      .then((response) => response.json())
      .then(({ products }) => setProducts(products));
  }, []);
  let aegisItems = products.filter((products) => {
    return products.category === "Aegis";
  });
  console.log(aegisItems)
    

  return (
    <Row xs={1} md={4} className="g-1">
      {aegisItems.map((item) => {
        return (
          <Col key={item.id} class="aegis-col">
            
            <Card className="aegis-cards">
              {/* <Card.Img variant="top" src={products.category(Aegis)} /> */}
              <Card.Img variant="top" src={item.url} />
              <Card.Body className="body-text" style={{ textAlign: "center" }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>(
                  {item.star})
                </Card.Text>
                <Card.Text className="text-muted">
                  <i class="fa-solid fa-peso-sign"></i>
                  {item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}

       </Row>
    // <div>hello</div>
  );
}

export default Products;
