import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({
    userId: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8082/loginUser', form);

      if (res.data === true) {
        alert("Login Successful ");
      } else {
        alert("Invalid Credentials ");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="userId"
            className="form-control mb-3"
            placeholder="Enter email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter password"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">Login</button>
        </form>

        <p className="mt-3 text-center">
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;