import { Link } from "react-router-dom";
import {RegisterAPI} from '../Utils/fetch';
function Register() {

    let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
            window.location.href = 'http://localhost:3000/'
        }
    }catch(error){
    }

    const register = ()=>{
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const fullName = document.getElementById('fullName').value
        const email = document.getElementById('email').value
        RegisterAPI(username, password, fullName, email)
        .then((result)=>{
            return result.json()
        })
        .then((result)=>{
            console.log('result: ', result)
            console.log('localStorage: ', localStorage)
            if(result.success){
                //go to dashboard / home
                localStorage.setItem('user', JSON.stringify(result.userData))
                window.location.href = 'http://localhost:3000/'
            }else{
                // alert user that credentials is invalid
            }
        })
        .catch(error=>{
            console.log('error: ', error)
        })
    }
    return (
        !isUserLoggedIn ?
        <>
           <div>
           <section
        class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: '15px'}}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5" style={{color: 'black'}}>
                      Create an account
                    </h2>

                    <div>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="username"
                          class="form-control form-control-lg"
                          placeholder="jdoe"
                        />
                        <label class="form-label" for="username" style={{color: 'black'}}>
                          Username
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="fullName"
                          class="form-control form-control-lg"
                          placeholder="John Doe"
                        />
                        <label class="form-label" for="fullName" style={{color: 'black'}}>
                          Full Name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          class="form-control form-control-lg"
                          placeholder="jdoe@mail.com"
                        />
                        <label class="form-label" for="email" style={{color: 'black'}}>
                          Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                          placeholder="Password"
                        />
                        <label class="form-label" for="form3Example4cg" style={{color: 'black'}}>
                          Password
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          class="form-control form-control-lg"
                          placeholder="Repeat Password"
                        />
                        <label class="form-label" for="password" style={{color: 'black'}}>
                          Repeat your password
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g" style={{color: 'black'}}>
                          I agree all statements in{" "}
                          <Link to='/terms-of-service' className="text-body">
                            <u style={{color: 'black'}}>Terms of service</u>
                            </Link>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{color: 'black'}} onClick={register}
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0" style={{color: 'black'}}>
                        Have already an account?{" "}
                        <Link to='/login' className="fw-bold text-body">
                          <u style={{color: 'black'}}>Login here</u>
                          </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           </div>
        </>
        :
        <></>
    );
}

export default Register;