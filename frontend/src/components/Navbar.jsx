import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { BsSearch, BsPersonCircle, BsChevronDown } from "react-icons/bs";
import api from "../api/config.js"

const Navbar = () => {
  let navigate = useNavigate();
  const [isDropDown, setDropDown] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!isDropDown);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload(false);
  }




  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Auction House
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/drawing">
                      Drawings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/painting">
                      Paintings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photographic">
                      Photographic Images
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sculpture">
                      Sculptures
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/carving">
                      Carvings
                    </Link>
                  </li>
                </ul>
              </li>
              {localStorage.getItem('isAdmin') === 'true' ?
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About Us
                  </Link>
                </li>}
              {/* {localStorage.getItem('Seller')  === 'true' ?
                <li className="nav-item">
                  <Link className="nav-link" to="/auctionpanel">
                    Create Auction
                  </Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>} */}
            </ul>



            {!localStorage.getItem('login') ? <form className="d-flex" role="search">
              <Link to="/login" className="btn btn-outline-success mx-3 mt-2" type="submit">LogIn</Link>
              <Link to="/signup" className="btn btn-outline-success mt-2" type="submit">SignUp</Link>
            </form>
              :
              <div className="dropdown">
                {/* <button
              style={{ width: "8rem", marginRight: "3rem" }}
              onClick={toggleDropDown}
            > */}
                {/* <BsPersonCircle style={{ width: "rem" }} />
              <BsChevronDown /> */}
                {/* </button> */}
                <i class="fa-solid fa-circle-user fa-2xl" style={{ width: "3rem", marginRight: "1rem" }} onClick={toggleDropDown}></i>
                <div style={{ marginRight: "10rem" }}>
                  <ul style={{ marginRight: "5rem", marginLeft: "auto" }}
                    className={`dropdown-menu ${isDropDown ? "show" : ""
                      }`}
                  >

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            }

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

<a href="http://localhost/3000"><button>Click Me</button></a>
