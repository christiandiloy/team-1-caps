export const myExpressURL = "http://localhost:3005";

const userData = JSON.parse(localStorage.getItem("user"));
var userId = userData && userData.id ? userData.id : null;

const userAddress = JSON.parse(localStorage.getItem("address"));
var userAdd = userAddress && userAddress.id ? userAddress.id : null;

export const serverRoutes = {
  Login: myExpressURL + "/api/v2/login",
  Register: myExpressURL + "/api/v2/register",
  UpdateProfile: myExpressURL + `/api/v2/users/${userId}/profile`,
  UpdatePassword: myExpressURL + `/api/v2/users/${userId}/password`,
  Address: myExpressURL + `/api/v2/address`,
  FindAddress: myExpressURL + `/api/v2/users/${userId}/addresses`,
  UpdateAddress: myExpressURL + `/api/v2/users/${userAdd}/address`,
  Subscriber: myExpressURL + "/subscribe",
};
