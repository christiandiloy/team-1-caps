import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./store.css";
import { addToCart } from "./features/cartSlice";

function TopDeals() {
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
    return products;
  });
  console.log(aegisItems);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1 className="slider-h1">Top Deals</h1>
      <Carousel responsive={responsive}>
        {aegisItems.map((item) => {
          return (
            <div>
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={item.url}
                  alt="product"
                  variant="top"
                />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "orange" }}></i>(
                  {item.star})
                </p>
                <div className="card-price">
                  <i class="fa-solid fa-peso-sign"></i>
                  {item.price}
                </div>
                <button
                  className="btn btn-success"
                  id="cart-btn"
                  style={{ width: "80%" }}
                  onClick={() => handleAddToCart(item)}
                >
                  + Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
export default TopDeals;