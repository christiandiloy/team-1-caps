import React from "react";
import "./orders.css";

function Orders() {
  return (
    <>
      <div className="profile-header container my-3 p-4 border">
        <div className="d-flex justify-content-between">
          <h3>My Orders</h3>
        </div>
        <hr />
        {/* Address body */}
        <div className="orders-body d-flex justify-content-center align-items-center">
          <div className="row row-cols-1 text-center">
            <span className="display-3 text-muted">
              <i class="fas fa-clipboard-list"></i>
            </span>
            <p className="lead">No orders yet.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
