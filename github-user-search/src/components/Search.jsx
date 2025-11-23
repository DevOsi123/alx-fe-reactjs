// src/components/Search.js
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState(""); // state to store input value

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (username) {
      onSearch(username); // call the parent function with the input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // update state when typing
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
