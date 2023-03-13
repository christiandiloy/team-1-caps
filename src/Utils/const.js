export const myExpressURL = "http://localhost:3005";

const userData = JSON.parse(localStorage.getItem("user"));
var userId = userData && userData.id ? userData.id : 0;

export const serverRoutes = {
  Login: myExpressURL + "/api/v2/login",
  Register: myExpressURL + "/api/v2/register",
  UpdatePassword: myExpressURL + `/api/v2/users/${userId}/password`,
  Subscriber: myExpressURL + "/subscribe",
};
