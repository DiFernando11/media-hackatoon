import React from "react";

function NumberInput({
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
      <div className="flex gap-2 justify-center items-center">
        <input
          type="number"
          id="halloween-number"
          name={inputName}
          value={inputValue}
          onChange={handleChange}
          className="block font-general-md w-full p-2 border-b text-white bg-transparent focus:outline-none"
          placeholder={placeholder}
        />
        <span className="text-white">PX</span>
      </div>
      {error && <p className="text-red-500 font-general-md">{error}</p>}
    </>
  );
}

export default NumberInput;
