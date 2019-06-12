import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/batters">
        <li>Batters</li>
      </Link>
      <Link to="/pitchers">
        <li>Pitchers</li>
      </Link>
    </div>
  );
};
