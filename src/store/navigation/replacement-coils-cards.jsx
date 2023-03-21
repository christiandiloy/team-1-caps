import React from "react";
import "../store.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ReplacementCoilsCards() {
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
      .then(({ products }) => setProducts(products));
  }, []);
  let aegisItems = products.filter((products) => {
    return products.category === "Coil";
  });
  console.log(aegisItems);

  //Item page links
  const itemURL = "http://localhost:3000/item-page/";

  return (
    <Row xs={1} md={4} className="g-1" id="cards-container">
      {aegisItems.map((item) => {
        return (
          <Col key={item.id} class="aegis-col">
            <Card id="aegis-cards">
              <Link
                to={`${itemURL}${item.page_name}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Img className="img-fluid" variant="top" src={item.url} />
                <Card.Title style={{ textAlign: "center" }}>
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

export default ReplacementCoilsCards;
