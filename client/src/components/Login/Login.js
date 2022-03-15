import React from "react";
import "./Login.scss";

//images
import Logo from "../../assets/images/logos/Crestera-Logo.png";
import Google from "../../assets/images/Icons/google.png";

function Login() {
  return (
    <div className="logo">
      <div className="logo__container">
        <form className="login__form">
          <img src={Logo} alt="cresetra__logo" />
          <h1>LOGIN</h1>

          <div className="login__form__group">
            <input
              type="text"
              className="login__from__control"
              placeholder="Email"
            />
          </div>
          <div className="login__form__group">
            <input
              type="text"
              className="login__from__control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="login__form__btn">
            LOGIN
          </button>
          <hr />

          <button type="button" className="signup__form__google-btn">
            <img
              src={Google}
              alt="google-logo"
              width={30}
              className="signup__form__google"
            />
            <span>Sign up with google</span>
          </button>
          <p>New User?</p>
          <a href="#">Signup</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
