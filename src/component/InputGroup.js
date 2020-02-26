import React from "react";

const InputGroup = ({ name, placeholder, value, icon, type, onChange , className}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-pretend">
        <span className="input-group-text span">
          <i className={icon} />
        </span>
      </div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
