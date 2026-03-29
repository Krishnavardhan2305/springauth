import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8082/addUser', form);

      alert("Registered Successfully ");
      navigate("/"); 
    } catch (err) {
      console.error(err);
      alert("Registration Failed ");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Enter email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Enter name"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter password"
            onChange={handleChange}
          />

          <button className="btn btn-success w-100">Register</button>
        </form>

        <p className="mt-3 text-center">
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;