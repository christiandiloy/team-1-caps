import React, {useEffect, useState} from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const handleChange = (value) => {
    setInput(value)
    window.history.replaceState(null, "", `?search=${value}`)
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        className="search-input"
        placeholder="Search for products..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
