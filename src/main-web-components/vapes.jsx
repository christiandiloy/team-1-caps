import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup,
} from "mdb-react-ui-kit";

var b100Kit = "/assets/images/b102-list.png";
var l200Classic = "/assets/images/l200-list.png";
var e100Kit = "/assets/images/e100-list.png";
var auPod = "/assets/images/gv-au-list.png";

export default function App() {
  return (
    <MDBCardGroup>
      <MDBCard className="cards">
        <MDBCardImage src={b100Kit} alt="..." position="top" class="card-image" />
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
        <MDBCardImage src={e100Kit} alt="..." position="top" class="card-image" />
        <MDBCardBody className="cards-body">
          <MDBCardTitle>Geekvape E100 & E100i Kit</MDBCardTitle>
          <MDBCardText>Once Try, Forever Eteno.</MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="cards bg-image hover-zoom">
        <MDBCardImage src={auPod} alt="..." position="top" class="card-image" />
        <MDBCardBody className="cards-body">
          <MDBCardTitle>Geekvape AU</MDBCardTitle>
          <MDBCardText>Once for All. Aegis for U.</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}
