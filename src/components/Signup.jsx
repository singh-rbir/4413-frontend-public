import React from 'react';

const Signup = () => {
  return (
    <div className="text-center mh-100">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Signup Page</h1>
        <label for="inputFirstName" className="sr-only">
          First name
        </label>
        <input
          type="text"
          id="inputFirstName"
          className="form-control"
          placeholder="First name"
          required=""
          autoFocus={true}
        />
        <label for="inputLastName" className="sr-only">
          Last name
        </label>
        <input
          type="text"
          id="inputLastName"
          className="form-control"
          placeholder="Last name"
          required=""
          autoFocus=""
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
          autoFocus=""
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
