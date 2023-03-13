import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./address.css";

function Address() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <div className="address-body d-flex justify-content-center align-items-center">
          <div className="row row-cols-1 text-center">
            <span className="display-3 text-muted">
              <i class="fas fa-map-marked-alt"></i>
            </span>
            <p className="lead">You don't have addresses yet.</p>
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
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  maxLength={11}
                  placeholder="Contact No."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Region, Province, City, Barangay"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Postal Code" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Street Name, Building, House No."
                />
              </Form.Group>
              <Form.Check label="Set as Default Address" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Address;
