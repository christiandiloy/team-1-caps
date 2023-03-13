import { serverRoutes } from "./const";

export const LoginAPI = (username, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    username: username,
    password: password,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  return fetch(serverRoutes.Login, requestOptions);
};

export const RegisterAPI = (username, password, fullName, email) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    username: username,
    password: password,
    fullName: fullName,
    email: email,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  return fetch(serverRoutes.Register, requestOptions);
};

export const updatePasswordAPI = (oldPassword, newPassword) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({ oldPassword, newPassword });
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };
  return fetch(serverRoutes.UpdatePassword, requestOptions);
};

//Fetch Profile Data from Database
export const fetchUserProfile = async () => {
  try {
    const response = await fetch(serverRoutes.UpdateProfile);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.success) {
      return Promise.resolve(data.data);
    } else {
      return Promise.reject(data.message);
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return Promise.reject("Failed to fetch user profile");
  }
};

export const SubscriberAPI = (email) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  return fetch(serverRoutes.Subscriber, requestOptions);
};
