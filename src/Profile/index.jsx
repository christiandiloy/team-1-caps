import React, { useState } from "react";
import "./profile.css";
import EditProfile from "./Edit-Profile";
import Orders from "./My-Orders";
import Address from "./Address";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  let tabContent;
  if (activeTab === "profile") {
    tabContent = <EditProfile />;
  } else if (activeTab === "orders") {
    tabContent = <Orders />;
  } else if (activeTab === "address") {
    tabContent = <Address />;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="profile-tab col-2 ">
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a
                  href="#profile"
                  class={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                  onClick={() => handleTabClick("profile")}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#orders"
                  class={`nav-link ${activeTab === "orders" ? "active" : ""}`}
                  onClick={() => handleTabClick("orders")}
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="#address"
                  class={`nav-link ${activeTab === "address" ? "active" : ""}`}
                  onClick={() => handleTabClick("address")}
                >
                  Address
                </a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="col-10">{tabContent}</div>
        </div>
      </div>
    </>
  );
}
