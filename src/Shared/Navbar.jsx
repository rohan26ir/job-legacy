import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import logo from '../assets/job-application.png'

const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext)

  const handleSignOutUser =() =>{
    signOutUser()
    .then(() => {
      console.log("Sign Out successful");
    })
    .catch(error => {
      console.log(error);
    })
  }

  const menuLink = <>
     <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
            <Link to={'/myAplications'}>My Application</Link>
              </li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuLink}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl font-bold"> 
            <img
            className="h-10" 
            src={logo} 
            alt="" />Job Legacy</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            {menuLink}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user 
            ? <button className="bg-[#EA1A66] px-3 py-1 rounded-md" onClick={handleSignOutUser}><button>Log Out</button></button>
            : <Link to={'/register'}><button>Register</button></Link>
          }
          <Link to={'/SignIn'}><button className="bg-[#3e2fd8] px-3 py-1 rounded-md">Sign In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
