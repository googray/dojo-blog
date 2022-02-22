import React from "react";

const handleClick = (e) => {
  console.log("hello, roman", e);
};
const handleClickAgain = (name, e) => {
  console.log("hello, " + name, e.target);
};

const Home = () => {
  return (
    <div className="home">
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={handleClickAgain}>Click me again</button> */}
      <button onClick={(e) => handleClickAgain("roman", e)}>
        Click me again
      </button>
    </div>
  );
};
export default Home;
