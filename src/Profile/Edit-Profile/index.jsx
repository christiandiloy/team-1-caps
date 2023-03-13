import React, { useState } from "react";
import { updateProfileAPI } from "../../Utils/fetch";

function EditProfile() {
  const data = localStorage.getItem("user");
  const userData = JSON.parse(data);
  const [contactNumber, setContactNumber] = useState("");
  const [Email, setEmail] = useState(userData.email);
  const [FullName, setFullname] = useState(userData.full_name);

  const handleContactNumberChange = (event) => {
    const { value } = event.target;
    const validatedValue = value.replace(/[^0-9]/g, "").substring(0, 11);
    setContactNumber(validatedValue);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setFullname(value);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [gender, setGender] = useState("");

  function handleGenderChange(event) {
    setGender(event.target.value);
    document.getElementById("gender-value").value = event.target.value;
  }

  const updateProfile = () => {
    const fullName = document.getElementById("input-fullName").value;
    const email = document.getElementById("input-email").value;
    const contactNo = document.getElementById("input-number").value;
    const dateOfBirth = document.getElementById("input-birth").value;

    updateProfileAPI(fullName, email, contactNo, gender, dateOfBirth)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        if (result.success) {
          setErrorMessage("");
          alert("Profile updated successfully!");
        } else {
          throw new Error("Failed to update profile.");
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
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
              value={FullName}
              onChange={handleNameChange}
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
              value={Email}
              onChange={handleEmailChange}
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
                value="Male"
                checked={gender === "Male"}
                onChange={handleGenderChange}
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
                value="Female"
                checked={gender === "Female"}
                onChange={handleGenderChange}
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
                value="Other"
                checked={gender === "Other"}
                onChange={handleGenderChange}
              />
              <label class="form-check-label" for="inlineRadio3">
                Other
              </label>
            </div>
          </div>
        </div>
        <input type="hidden" id="gender-value" />
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
          <button
            className="btn btn-warning mt-5 w-25 text-light"
            onClick={updateProfile}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
