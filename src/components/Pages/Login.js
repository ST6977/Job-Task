import React from "react";
import "./Login.css";
import image from "../../img/download (1).jpg";
// import image from "../../img/google.png";
import logo from "../../img/google.png";
import { Button, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <section className="contact my-5 py-5 h-979 w-715 ">
      <div className="container">
        <div className="section-header text-center text-white mb-5 ml-8">
          <img class="picture" src={image}></img>
          <br />
          <br />
          <div class="title-name">
            <h1 className="container text-center ">
              Explore New Courses....Hurryup
            </h1>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="col-md-9 mx-auto ">
          <form action="">
            <div className="form-group mb-3 text-center">
              <input
                class="email"
                type="text"
                className="form-control bg-white text-black "
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mb-3 text-center">
              <input
                class="pass"
                type="text"
                className="form-control bg-white text-black"
                placeholder="Password "
              />
            </div>

            <div>
              <Link class="forget">
                {" "}
                <h6>Forget Password?</h6>
              </Link>
            </div>

            <div className="form-group text-center">
              <button
                class="color"
                type="button"
                // className="btn btn-lg btn-purple"
              >
                {" "}
                LOG IN{" "}
              </button>
              <br />
              <br />
              <br />

              <h6 class="OR">------------- or --------------------</h6>
            </div>
          </form>
          <div className="text-center w-55 h-52.69 ">
            <h1 class="last-part">
              <i class="fab fa-facebook"></i>{" "}
              <img class="fa-google" src={logo}></img>
            </h1>
          </div>

          <br />
          <br />
          <div>
            <h6 className="text-center">
              Don't have an account?<Link>Sign Up</Link>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
