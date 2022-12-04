import React from "react";

export default function Search() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <label htmlFor="search">
      Search:
      <input type="text" id="search" onChange={handleChange} />
    </label>
  );
}
