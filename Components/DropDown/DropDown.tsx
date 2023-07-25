// src/components/Dropdown.js
import React, { useState } from "react";

const Dropdown = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor="dropdown" className="block mb-2 text-gray-700">
        Select an option:
      </label>
      <select
        id="dropdown"
        className="block w-full p-2 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option className="text-xl bg-white" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="mt-2 text-gray-700">Selected option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
