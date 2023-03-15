import React, {useEffect, useState} from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";

// const handleSubmit = (e) => e.preventDefault()

// const handSearchChange = (e) => {
//   if(!e.target.value) return setSearchResults(items)

//   const resultsArray = post.filter(item => item.title.includes(e.target.value) || post.body.includes(e.target.value))

//   setSearchResults(resultsArray)

// }



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
