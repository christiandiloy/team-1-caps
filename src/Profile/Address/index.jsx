import React, { useState, useEffect } from "react";
import { AddressAPI } from "../../Utils/fetch";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./address.css";
import { serverRoutes } from "../../Utils/const";
import { Card, ListGroup } from "react-bootstrap";
import { updateAddress } from "../../Utils/fetch";

function Address() {
  const userDataId = localStorage.getItem("user");
  const userObj = JSON.parse(userDataId);
  const userIdLocal = userObj.id;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});

  //Render Address
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

  //Edit Address
  const handleEdit = (address) => {
    setSelectedAddress(address);
    localStorage.removeItem("address");
    localStorage.setItem("address", JSON.stringify(address));
    setShow(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const contactNo = document.getElementById("contactNo").value;
    const place = document.getElementById("place").value;
    const postalCode = document.getElementById("postalCode").value;
    const houseNo = document.getElementById("houseNo").value;
    try {
      const message = await updateAddress(
        fullName,
        contactNo,
        place,
        postalCode,
        houseNo
      );
      alert(message);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
    setShow(false);
  };

  //Delete Address
  const [message, setMessage] = useState("");

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this address?"
    );
    if (confirmed) {
      fetch(serverRoutes.DeleteAddress, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          setMessage(data.message);
        })
        .catch((error) => {
          console.error("Error deleting address:", error);
          setMessage("Failed to delete address.");
        });
    }
  }

  //Add Address
  const handleAdd = () => {
    setSelectedAddress({});
    setShow(true);
  };

  const handleAddAddress = () => {
    const fullName = document.getElementById("fullName").value;
    const contactNo = document.getElementById("contactNo").value;
    const place = document.getElementById("place").value;
    const postalCode = document.getElementById("postalCode").value;
    const houseNo = document.getElementById("houseNo").value;

    AddressAPI(fullName, contactNo, place, postalCode, houseNo)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        if (result.success) {
          alert("Address successfully added.");
          setShow(false);
        } else {
          alert(result.message);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <>
      <div className="profile-header container my-3 p-4 border">
        <div className="d-flex justify-content-between">
          <h3>My Addresses</h3>
          <button className="btn btn-warning text-light" onClick={handleAdd}>
            <i class="fas fa-plus"></i>&nbsp;Add New Address
          </button>
        </div>
        <hr />
        {/* Address body */}
        <div className="address-body">
          <div className="address-list-wrapper">
            {/* No Address */}
            {addresses.length === 0 ? (
              <p>No address available</p>
            ) : (
              <ListGroup>
                {addresses.map((address) => (
                  <ListGroup.Item key={address.id}>
                    <Card border="light" className="border-0">
                      <Card.Body>
                        <Card.Title>
                          <div className="address-editDelete d-flex justify-content-between">
                            {address.full_name}
                            <p className="h6">
                              <a onClick={() => handleEdit(address)}>Edit</a> |{" "}
                              <a onClick={handleDelete}>Delete</a>
                            </p>
                          </div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted d-flex justify-content-start">
                          {address.contact_no}
                        </Card.Subtitle>
                        <Card.Text className="d-flex justify-content-start">
                          {address.house_no}, {address.place},{" "}
                          {address.postal_code}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedAddress.id ? "Edit" : "Add"} Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                defaultValue={selectedAddress.full_name}
              />
            </Form.Group>

            <Form.Group controlId="contactNo">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact number"
                defaultValue={selectedAddress.contact_no}
              />
            </Form.Group>

            <Form.Group controlId="place">
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter place"
                defaultValue={selectedAddress.place}
              />
            </Form.Group>

            <Form.Group controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postal code"
                defaultValue={selectedAddress.postal_code}
              />
            </Form.Group>

            <Form.Group controlId="houseNo">
              <Form.Label>House No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter house number"
                defaultValue={selectedAddress.house_no}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedAddress.id ? (
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAddAddress}>
              Add Address
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Address;
