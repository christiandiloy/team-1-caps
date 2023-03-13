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
