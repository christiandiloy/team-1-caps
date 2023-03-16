import React, { useState, useEffect } from "react";
import { AddressAPI } from "../../Utils/fetch";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./address.css";
import { serverRoutes } from "../../Utils/const";
import { Card, ListGroup } from "react-bootstrap";

function Address() {
  const userDataId = localStorage.getItem("user");
  const userObj = JSON.parse(userDataId);
  const userIdLocal = userObj.id;

  const AddAddress = () => {
    const userID = userIdLocal;
    const fullName = document.getElementById("fullName").value;
    const contactNo = document.getElementById("contactNo").value;
    const place = document.getElementById("place").value;
    const postalCode = document.getElementById("postalCode").value;
    const houseNo = document.getElementById("houseNo").value;

    AddressAPI(userID, fullName, contactNo, place, postalCode, houseNo)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        if (result.success) {
          alert("Address successfully added.");
        } else {
          alert(result.message);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch(serverRoutes.FindAddress)
      .then((response) => response.json())
      .then((data) => {
        setAddresses(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="profile-header container my-3 p-4 border">
        <div className="d-flex justify-content-between">
          <h3>My Addresses</h3>
          <button className="btn btn-warning text-light" onClick={handleShow}>
            <i class="fas fa-plus"></i>&nbsp;Add New Address
          </button>
        </div>
        <hr />
        {/* Address body */}
        <div className="address-body">
          <div className="address-list-wrapper">
            {/* No Address */}
            {addresses.length === 0 && (
              <div className="no-address">
                <div className="row row-cols-1 text-center pt-5">
                  <span className="display-3 text-muted">
                    <i className="fas fa-map-marked-alt"></i>
                  </span>
                  <p className="lead">You don't have addresses yet.</p>
                </div>
              </div>
            )}

            {/* Card */}

            {addresses.length > 0 && (
              <div className="address-list">
                {addresses.map((address, index) => (
                  <div key={address.house_no}>
                    <div className="address-item ">
                      <div className="d-flex justify-content-between">
                        <h5>{address.full_name}</h5>
                        <h5 className="address-editDelete h6 nav-link">
                          <a href="">Edit</a> | <a href="">Delete</a>
                        </h5>
                      </div>
                      <p>
                        {address.house_no}&nbsp;{address.place},{" "}
                        {address.postal_code}
                        <br />
                        {address.contact_no}
                      </p>
                    </div>
                    {index < addresses.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="contactNo"
                  type="text"
                  placeholder="Contact No."
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                    if (event.target.value.length >= 11) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="place"
                  type="text"
                  placeholder="Region, Province, City, Barangay"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="postalCode"
                  type="number"
                  placeholder="Postal Code"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="houseNo"
                  type="text"
                  placeholder="Street Name, Building, House No."
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="warning" onClick={AddAddress}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Address;
