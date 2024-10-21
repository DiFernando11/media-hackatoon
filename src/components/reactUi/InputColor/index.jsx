import React from "react";

function InputColor({
  label,
  inputValue,
  handleChange,
  inputName,
  error,
  placeholder,
}) {
  return (
    <>
      {label && (
        <label
          htmlFor="small-textarea"
          className="font-general-md -text-xs-1 leading-5 mt-4 text-white"
        >
          {label}
        </label>
      )}
      <input
        type="color"
        id="halloween-color"
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        className="block font-general-md w-full h-10 p-2 border-b text-white bg-transparent focus:outline-none"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 font-general-md">{error}</p>}
    </>
  );
}

export default InputColor;
