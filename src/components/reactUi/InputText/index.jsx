import React from "react";

function InputText({
  label,
  inputValue,
  handleChange,
  inputName,
  placeholder,
  error,
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
      <textarea
        name={inputName}
        id="small-textarea"
        className="block font-general-md w-full p-2 border-b text-white bg-transparent focus:outline-none"
        placeholder={placeholder}
        rows="1"
        value={inputValue}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 font-general-md">{error}</p>}
    </>
  );
}

export default InputText;
