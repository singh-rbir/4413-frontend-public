import React from 'react';

const Signup = () => {
  return (
    <div className="text-center mh-100">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Signup Page</h1>
        <label for="inputEmail" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="inputEmail"
          className="form-control"
          placeholder="Name"
          required=""
          autofocus=""
        />
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signup;
