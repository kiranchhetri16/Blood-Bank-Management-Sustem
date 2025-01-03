import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Address:", address);
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, address }),
      });
      if (response.ok) {
        setMessage("Signup successful!");
      } else {
        setMessage("Signup failed!");
      }
    } catch (err) {
      console.error("Error occurred during signup", err);
      setMessage("error occurred during signup");
    }
  };
  return (
    <>
      <form className="form-test" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="formgroup">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="formgroup">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter e-mail"
          />
          <div className="formgroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <div className="formgroup">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
            />
          </div>
          <button type="submit">Signup</button>
          {message && <p>{message}</p>}
        </div>
      </form>
    </>
  );
};
export default Signup;
