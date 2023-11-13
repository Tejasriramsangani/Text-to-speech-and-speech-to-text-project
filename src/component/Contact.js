import { useState } from "react";
import React from "react";
import "./Contact.css";
const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    lname: "",
    email: "",
    number: "",
    gender: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/send-email", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Ferror:-", error));
  };

  return (
    <>
      <div className="box">
        <div className="box1">
          <h2 className="text-center">Contact Us</h2>
        </div>
        <div className="fm">
          <form action="" className="form" onSubmit={handleSubmit}>
            <div>
              <div className="form1">
                <div>
                  <label htmlFor="">
                    {" "}
                    <b>FirstName</b>{" "}
                    <sup>
                      {" "}
                      <b>*</b>
                    </sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">
                    <b>LastName</b>
                    <sup>
                      {" "}
                      <b>*</b>
                    </sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    id="lname"
                    required
                  />
                </div>
              </div>

              <div className="form2">
                <div>
                  <label htmlFor="">
                    {" "}
                    <b>E-mail Id </b>{" "}
                    <sup>
                      {" "}
                      <b>*</b>{" "}
                    </sup>{" "}
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">
                    {" "}
                    <b>Phone No</b>
                    <sup>
                      {" "}
                      <b>*</b>
                    </sup>
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    id="number"
                    required
                  />
                </div>
              </div>

              <div className="form3">
                <div>
                  <label htmlFor="">
                    {" "}
                    <b>Gender</b>
                    <sup>
                      {" "}
                      <b>*</b>
                    </sup>
                  </label>
                  <select name="gender" id="gender" onChange={handleChange}>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Others</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">
                    {" "}
                    <b>Country</b>
                    <sup>
                      {" "}
                      <b>*</b>
                    </sup>
                  </label>
                  <select name="country" id="country" onChange={handleChange}>
                    <option value="">India</option>
                    <option value="">Chaina</option>
                    <option value="">Japan</option>
                    <option value="">Australia</option>
                    <otion value="">America</otion>
                    <option value="">Uk</option>
                    <option value="">London</option>
                    <option value="">Paris</option>
                  </select>
                </div>
              </div>
              <div className="form4">
                <div className="pt-2">
                  <label htmlFor="">Message:</label>
                  <input
                    className="text-center "
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                    placeholder="Enter your Query?"
                  
                  />
                </div>
              </div>
              <div className="form5">
                <button className="btn btn-primary p-2">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="i">
          <h5>Address</h5>
          <p>
            TCS House,Raveline street, <br /> <br /> Hyderabad,Andhra Pradesh
          </p>
        </div>

        <div className="j">
          <h5>Phone Number</h5>
          <p>
            9391299112 <br /> (or) <br /> 993-567-223(Landlineno)
          </p>
        </div>
        <div className="k">
          <h5>Email</h5>
          <p>
            nbrastsr55346066@gmail.com <br />& <br /> Ramnutejabharg1@gmail.com
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.5945180968206!2d81.51742850000002!3d16.54655600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2ab8946b1f3%3A0x5681636406b48c4b!2sAvg%20Cinemas%20Multiplex%204k%20Dolby%20Atmos!5e0!3m2!1sen!2sin!4v1688796947914!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
