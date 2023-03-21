import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./store.css";
import { addToCart } from "./features/cartSlice";

function TopDeals(props) {
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
    return products.category === "Aegis";
  });
  console.log(aegisItems);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  //Item page links
  const itemURL = "http://localhost:3000/item-page/";

  return (
    <div className="slider-container py-3">
      <h2 className="slick-title">Best Selling</h2>
      <Slider {...settings}>
        {aegisItems.map((item) => {
          return (
            <div>
              <div className="card-body">
                <Link
                  to={`${itemURL}${item.page_name}`}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => {
                    props.setCurrentLink("/pod-kits");
                  }}
                >
                  <img
                    className="img-fluid"
                    src={item.url}
                    alt="product"
                    variant="top"
                  />
                  <h5 className="card-title">{item.title}</h5>
                </Link>
                <p className="card-text text-muted">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "orange" }}
                  ></i>
                  ({item.star})
                </p>
                <div className="card-price">
                  <del>
                    <span className="price-rsp text-muted">
                      <i className="fa-solid fa-peso-sign"></i>
                      {item.rsp}
                    </span>
                  </del>{" "}
                  <i className="fa-solid fa-peso-sign"></i>
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
      </Slider>
    </div>
  );
}

export default TopDeals;
