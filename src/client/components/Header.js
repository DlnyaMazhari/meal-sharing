import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <div className="nav">
          <div className="HeaderName">
            <Link to="/" className="link">
              <h1>Meal Sharing web</h1>
            </Link>
          </div>
          <div className="HeaderRight">
            <Link to="/about" className="link" className="HeaderRight">
              About
            </Link>
            <Link to="/meals" className="link" className="HeaderRight">
              Meals
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
