import React, { useState, useEffect } from "react";
import { fetchUserProfile, updateUserProfile } from "../../Utils/fetch";

function EditProfile() {
  const [userData, setUserData] = useState({
    username: "",
    fullName: "",
    email: "",
    contactNo: "",
    gender: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    fetchUserProfile()
      .then((data) => {
        setUserData({
          username: data.username,
          fullName: data.full_name,
          email: data.email,
          contactNo: data.contact_no,
          gender: data.gender,
          dateOfBirth: data.date_of_birth,
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [genderData, setGenderData] = useState({
    gender: "male",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      userData.gender = genderData.gender;
      const message = await updateUserProfile(userData);
      alert(message);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleGenderChange = (event) => {
    setGenderData({
      gender: event.target.value,
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
              onChange={handleChange}
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
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
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
              name="email"
              value={userData.email}
              onChange={handleChange}
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
              maxLength="11"
              value={userData.contactNo}
              name="contactNo"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Gender */}
        <div className="form-group row mb-3">
          <label htmlFor="input-gender" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10">
            <select
              className="form-select w-25"
              id="gender"
              name="gender"
              value={genderData.gender}
              onChange={handleGenderChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        {/* Date of Birth */}
        <div className="form-group row mb-3">
          <label htmlFor="input-birth" className="col-sm-2 col-form-label">
            Date of Birth
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control w-25"
              id="input-birth"
              name="dateOfBirth"
              value={userData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Save Button */}
        <div className="text-end">
          <button
            className="btn btn-warning mt-5 w-25 text-light"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
