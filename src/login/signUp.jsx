import { RegisterAPI } from "../Utils/fetch";
function SignUp() {
  let isUserLoggedIn = false;
  try {
    isUserLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isUserLoggedIn && isUserLoggedIn.id) {
      window.location.href = "http://localhost:3000/";
    }
  } catch (error) {}

  const register = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    RegisterAPI(username, password, fullName, email)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log("result: ", result);
        console.log("localStorage: ", localStorage);
        if (result.success) {
          //go to dashboard / home
          localStorage.setItem("user", JSON.stringify(result.userData)); // put back if you want to automatically login
          window.location.href = "http://localhost:3000/"; // change to http://localhost:3000/ if you want to automatically login
        } else {
          // alert user that credentials is invalid
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return !isUserLoggedIn ? (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title pb-5">Sign-up</span>

              <div className="wrap-input100">
                <input
                  id="username"
                  className="input100"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  id="password"
                  className="input100"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="wrap-input100">
                <input
                  id="fullName"
                  className="input100"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div className="wrap-input100">
                <input
                  id="email"
                  className="input100"
                  type="Email"
                  placeholder="Email"
                />
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={register}>
                  Register now
                </button>
              </div>

              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or sign in using</span>
              </div>

              <div className="login100-form-social flex-c-m">
                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg1 m-r-5"
                >
                  <i className="fa fa-facebook-f" aria-hidden="true"></i>
                </a>

                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg2 m-r-5"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </form>

            <div
              className="login100-more"
              style={{
                backgroundImage: `url(images/loginbg.jpg)`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default SignUp;
