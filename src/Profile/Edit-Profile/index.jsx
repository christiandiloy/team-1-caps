import React, { useState } from "react";

function EditProfile() {
  const data = localStorage.getItem("user");
  const userData = JSON.parse(data);
  const [contactNumber, setContactNumber] = useState("");

  const handleContactNumberChange = (event) => {
    const { value } = event.target;

    const validatedValue = value.replace(/[^0-9]/g, "").substring(0, 11);
    setContactNumber(validatedValue);
  };

  return (
    <>
      <div className="profile-header container my-3 p-4 border">
        <h3>My Profile</h3>
        <p>Manage and protect your account</p>
        <hr />
        {/* Username */}
        <div className="form-group row mb-3">
          <label htmlFor="input-username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="input-username"
              disabled
              value={userData.username}
            />
          </div>
        </div>
        {/* Fullname */}
        <div className="form-group row mb-3">
          <label htmlFor="input-fullName" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="input-fullName"
              value={userData.full_name}
            />
          </div>
        </div>
        {/* Email */}
        <div className="form-group row mb-3">
          <label htmlFor="input-email" className="col-sm-2 col-form-label">
            Email Address
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="input-email"
              value={userData.email}
            />
          </div>
        </div>
        {/* Contact No. */}
        <div className="form-group row mb-3">
          <label htmlFor="input-number" className="col-sm-2 col-form-label">
            Contact No.
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control w-25"
              id="input-number"
              value={contactNumber}
              maxLength="11"
              onChange={handleContactNumberChange}
            />
          </div>
        </div>
        {/* Gender */}
        <div className="form-group row mb-3">
          <label htmlFor="input-gender" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3">
                Other
              </label>
            </div>
          </div>
        </div>
        {/* Date of Birth */}
        <div className="form-group row mb-3">
          <label htmlFor="input-birth" className="col-sm-2 col-form-label">
            Date of Birth
          </label>
          <div className="col-sm-10">
            <input type="date" className="form-control w-25" id="input-birth" />
          </div>
        </div>
        {/* Save Button */}
        <div className="text-end">
          <button className="btn btn-warning mt-5 w-25 text-light">Save</button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
