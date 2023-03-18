import React, { useState } from "react";
import "./profile.css";
import EditProfile from "./Edit-Profile";
import ChangePass from "./Change-password";
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
  } else if (activeTab === "ChangePass") {
    tabContent = <ChangePass />;
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
                <button
                  class={`nav-link w-100 ${
                    activeTab === "profile" ? "orange-active active" : ""
                  }`}
                  onClick={() => handleTabClick("profile")}
                >
                  Profile
                </button>
              </li>
              <li class="nav-item">
                <button
                  class={`nav-link w-100 ${
                    activeTab === "ChangePass" ? "orange-active active" : ""
                  }`}
                  onClick={() => handleTabClick("ChangePass")}
                >
                  Change Password
                </button>
              </li>
              <li>
                <button
                  class={`nav-link w-100 ${
                    activeTab === "orders" ? "orange-active active" : ""
                  }`}
                  onClick={() => handleTabClick("orders")}
                >
                  Orders
                </button>
              </li>
              <li>
                <button
                  class={`nav-link w-100 ${
                    activeTab === "address" ? "orange-active active" : ""
                  }`}
                  onClick={() => handleTabClick("address")}
                >
                  Address
                </button>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <div className="container">{tabContent}</div>
          </div>
        </div>
      </div>
    </>
  );
}
