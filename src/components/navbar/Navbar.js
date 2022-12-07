import React from "react";
// import BookReview from "../bookReview/BookCard";
// import Home from "../home/Home";
// import Login from "../login/Login";
// import navbar from "../navbar";
import { Link as NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-#ffdde1">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/reviews">
                  BookReview
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/add_books">
                  Add book
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
