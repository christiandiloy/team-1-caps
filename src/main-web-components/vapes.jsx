import React, { Component } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import Slider from "react-slick";

var b100Kit = "/assets/images/b102-list.png";
var l200Classic = "/assets/images/l200-list.png";
var e100Kit = "/assets/images/e100-list.png";
var auPod = "/assets/images/gv-au-list.png";

export default class Vapes extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      // <div>
      //   <h2> Responsive </h2>
      //   <Slider {...settings}>
      //     <div>
      //       <h3>1</h3>
      //     </div>
      //     <div>
      //       <h3>2</h3>
      //     </div>
      //     <div>
      //       <h3>3</h3>
      //     </div>
      //     <div>
      //       <h3>4</h3>
      //     </div>
      //     <div>
      //       <h3>5</h3>
      //     </div>
      //     <div>
      //       <h3>6</h3>
      //     </div>
      //     <div>
      //       <h3>7</h3>
      //     </div>
      //     <div>
      //       <h3>8</h3>
      //     </div>
      //   </Slider>
      // </div>
      <MDBCardGroup>
        <Slider {...settings}>
          <MDBCard className="cards">
            <MDBCardImage
              src={b100Kit}
              alt="..."
              position="top"
              class="card-image"
            />
            <MDBCardBody className="cards-body">
              <MDBCardTitle>Geekvape B100 Kit</MDBCardTitle>
              <MDBCardText>New Tri-Proof. New Boost Pro.</MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="cards bg-image hover-zoom">
            <MDBCardImage
              src={l200Classic}
              alt="..."
              position="top"
              class="card-image"
            />
            <MDBCardBody className="cards-body">
              <MDBCardTitle>GEEKVAPE L200 Classic</MDBCardTitle>
              <MDBCardText>New Legend 2. New Power Beast.</MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="cards bg-image hover-zoom">
            <MDBCardImage
              src={e100Kit}
              alt="..."
              position="top"
              class="card-image"
            />
            <MDBCardBody className="cards-body">
              <MDBCardTitle>Geekvape E100 & E100i Kit</MDBCardTitle>
              <MDBCardText>Once Try, Forever Eteno.</MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="cards bg-image hover-zoom">
            <MDBCardImage
              src={auPod}
              alt="..."
              position="top"
              class="card-image"
            />
            <MDBCardBody className="cards-body">
              <MDBCardTitle>Geekvape AU</MDBCardTitle>
              <MDBCardText>Once for All. Aegis for U.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Slider>
      </MDBCardGroup>
    );
  }
}
