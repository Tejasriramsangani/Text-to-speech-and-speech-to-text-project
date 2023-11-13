import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/auth";
      const { data: result } = await axios.post(url, data);
      localStorage.setItem("token", result.token);
      console.log(result.message);
      window.location = "/";
    } catch (error) {
      setError("dev errir" + error);
    }
  };
  return (
    <>
      <div className="logbody">
        <div className="pv">
          <div className="logn">
            <h2 className="vs">LOGIN </h2>
            <form onSubmit={handleSubmit}>
              <a href="">
                <button className="logn2">
                  <i class="bi bi-google go"></i> <b> Login with Google</b>
                </button>
              </a>
              <a href="https://www.facebook.com/">
                <button className="logn2">
                  <i class="bi bi-facebook fb"></i>
                  <b>Login with Facebook</b>
                </button>
              </a>
              <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1710777005%3A1687169558675177&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneF9RpVAZ37mMEaxZmbqtNFYp_3U76DhPVpoaJHLEK4qA2VXlcVOVWcxSQ2Uw5op35Ec1-3ygw&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                <button className="logn2">
                  <i class="bi bi-envelope-fill en "></i>
                  <b>Login with E-mail</b>
                </button>
              </a>

              <input
                className="logn2"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="email"
                required
              />
              <input
                className="logn2"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="password"
                required
              />
              {error && <div>{error}</div>}
              <button className="btn" type="submit">
                Login
              </button>

              <p>
                <b>
                  you don't have login account then you{" "}
                  <Link to="/sign" className="tag">
                    SignUp
                  </Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
