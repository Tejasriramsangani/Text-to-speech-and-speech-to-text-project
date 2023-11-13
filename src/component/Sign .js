import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import './Signin.css';
import "./LoginPage.css";


const Signin = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/users";
      const { data: result } = await axios.post(url, data);
      console.log(result.message);
      navigate("/LoginPage");
    } catch (error) {
      setError("dev errir" + error);
    }
  };
  return (
    <>
      <div className="logbody">
        <div className="pv">
          <div className="logn">
            <h2 className="vs" class="mb-3">
              SignUp
            </h2>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              placeholder="FirstName"
              style={{width:"310px",borderRadius:"20px",padding:"7px"}}
              required
            />

            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              placeholder="lastName"
              style={{width:"310px",borderRadius:"20px",padding:"7px"}}
              required
            />

            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="email"
              style={{width:"310px",borderRadius:"20px",padding:"7px"}}
              required
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="password"
              style={{width:"310px",borderRadius:"20px",padding:"7px"}}
              required
            />
            {/* <input
              type="password"
              placeholder="Confirm Password"
              style={{ width: "350px" }}
            /> */}
            {error && <div>{error}</div>}
            <button className="btn" type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

{
  /* <div className='im'> 
    
      <div className='sign'>
        <h1 className='cc' class="text-center">SignUp</h1>

        <li className='sign1'><input type="text" placeholder='Enter name' /></li>
        <li className='sign1'><input type="number" placeholder='Mobile number' /></li>
        <li className='sign1'><input type="email" placeholder='anu@gmail.com' /></li>
        <li className='sign1'><input type="password" placeholder='Password' /></li>
        <li className='sign1'><input type="password" placeholder='Confirm Password' /></li>
        <li ><button className='sign2'>Signin</button></li>
     </div>

  </div>
   */
}
