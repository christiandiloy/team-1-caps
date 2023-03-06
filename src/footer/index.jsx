import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-06">
        <div className="container">
          <div className="row align-items-center align-items-stretch mb-5">
            <div className="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center">
              <div className="w-100">
                <span className="subheading">Subscribe to our</span>
                <h3 className="heading-section">Newsletter</h3>
              </div>
            </div>
            <div className="col-md-8 py-4 py-md-5 d-flex align-items-center pl-md-5 aside-stretch-right">
              <div action="#" className="subscribe-form w-100">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Enter email address"
                  />
                  <button type="submit" className="form-control submit">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-3 col-lg-6 order-md-last">
              <div className="row justify-content-end">
                <div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4">
                  <h2 className="footer-heading">
                    <a href="#" className="logo">
                      Colorlib
                    </a>
                  </h2>
                  <p className="copyright"></p>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-6">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Information</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Our Company
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Data
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Application</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Download
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Bike Provider
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        How to Used
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">API</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Credential
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-checkmark-circle-outline mr-2"></span>
                        Developer info
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    // <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
    //   <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    //     <div className="me-5 d-none d-lg-block">
    //       <span>Get connected with us on social networks:</span>
    //     </div>

    //     <div>
    //       <a
    //         href="https://www.facebook.com/GoodSourceSanMa"
    //         className="me-4 text-reset"
    //       >
    //         <MDBIcon fab icon="facebook-f" />
    //       </a>
    //       <a
    //         href="https://www.twitter.com/GoodSourceSanMa"
    //         className="me-4 text-reset"
    //       >
    //         <MDBIcon fab icon="twitter" />
    //       </a>
    //       <a href="goodsource@gmail.com" className="me-4 text-reset">
    //         <MDBIcon fab icon="google" />
    //       </a>
    //       <a
    //         href="https://www.instagram.com/GoodSourceSanMa"
    //         className="me-4 text-reset"
    //       >
    //         <MDBIcon fab icon="instagram" />
    //       </a>
    //     </div>
    //   </section>

    //   <section className="">
    //     <MDBContainer className="text-center text-md-start mt-5">
    //       <MDBRow className="mt-3">
    //         <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">
    //             <MDBIcon icon="gem" className="me-3" />
    //             VAPE HUB
    //           </h6>
    //           <p>
    //             We provide the best vape experience for our clients.
    //             <br />
    //             We provide the best and pleasing associates for our clients.
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">Products</h6>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               AEGIS
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               GEEKVAPE
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               E-JUICE
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               CHECK STORE FOR MORE
    //             </a>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">Contact US</h6>
    //           <p>
    //             <MDBIcon icon="home" className="me-2" />
    //             101# Beltran St. Brgy. Consuelo Sur, San Marcelino, Zambales
    //           </p>
    //           <p>
    //             <MDBIcon icon="envelope" className="me-3" />
    //             goodsource@gmail.com
    //           </p>
    //           <p>
    //             <MDBIcon icon="phone" className="me-3" /> +63919 656 0285
    //           </p>
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>

    //   <div
    //     className="text-center p-4"
    //     style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    //   >
    //     © 2020 Copyright:&nbsp;
    //     <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
    //       VAPE HUB ALL RIGHTS RESERVED.
    //     </a>
    //   </div>
    // </MDBFooter>
  );
}
