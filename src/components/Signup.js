
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export const Signup =()=>{

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You have successfully Registered")
        navigate('/');
    };
    
    return (
      <div className="main-container">
      <div className="signup-box p-5 shadow-lg">
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first">First Name:  </label>
            <input type="text" className="form-control" id="first" name="first" placeholder="First" maxLength={10} minLength={3} required />
          </div>
          <div className="form-group">
            <label htmlFor="last">Last Name:  </label>
            <input type="text" className="form-control" id="last" name="last" placeholder="Last" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:  </label>
            <input type="email" className="form-control" id="email" name="email" placeholder="abcd@gmai.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:  </label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" maxLength={12} minLength={8} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
    };
