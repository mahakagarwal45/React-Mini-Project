import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the custom CSS file

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful")
    navigate('/Dashboard');
  };

  return (
    <div className="main-container">
      <div className="login-box p-5 shadow-lg">
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailId">Email:</label>
            <input type="email" className="form-control" id="email" name="username" placeholder="abcd@gmail.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
        </form>
        <h4 className="text-center">Don't have an account yet?</h4>
        <h4 className="text-center"><Link to='./Signup'>Create an account</Link></h4>
      </div>
    </div>
  );
};
