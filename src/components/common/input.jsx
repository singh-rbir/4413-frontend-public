import React from 'react';

const Input = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className="form-group">
      <div className="label">
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        {...rest}
        name={name}
        placeholder={placeholder}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
