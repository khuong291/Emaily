import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Emaily!</h1>
      <p>Collect feedback form your users</p>
      <Link to="/surveys">
        <h5>Go to Dashboard ➡</h5>
      </Link>
    </div>
  );
};

export default Landing;
